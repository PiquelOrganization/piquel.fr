package handlers

import (
	"net/http"

	"github.com/PiquelChips/piquel.fr/services/users"
	"github.com/PiquelChips/piquel.fr/views/auth"
	"github.com/markbates/goth/gothic"
)

func (handler *Handler) HandleLogin(w http.ResponseWriter, r *http.Request) {
	auth.Login(users.GetPageData(w, r)).Render(r.Context(), w)
}

func (handler *Handler) HandleProviderLogin(w http.ResponseWriter, r *http.Request) {
	_, err := gothic.CompleteUserAuth(w, r)
	if err != nil {
		gothic.BeginAuthHandler(w, r)
		return
	}

	http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
}

func (handler *Handler) HandleAuthCallback(w http.ResponseWriter, r *http.Request) {
	user, err := gothic.CompleteUserAuth(w, r)
	if err != nil {
		panic(err)
        //http.Error(w, err.Error(), http.StatusInternalServerError)
        //return
	}

	err = handler.auth.StoreUserSession(w, r, user)
	if err != nil {
		panic(err)
	}

	http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
}

func (handler *Handler) HandleLogout(w http.ResponseWriter, r *http.Request) {
    err := gothic.Logout(w, r)
    if err != nil {
        panic(err)
    }

    handler.auth.RemoveUserSession(w, r)
    http.Redirect(w, r, "/", http.StatusTemporaryRedirect)
}
