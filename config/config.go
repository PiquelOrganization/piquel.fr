package config

import (
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

type Config struct {
	PublicHost              string
	Port                    string
	DBHost                  string
	DBPort                  string
	DBName                  string
	DBUser                  string
	DBPassword              string
	CookiesAuthSecret       string
	CookiesAuthAgeInSeconds int
	CookiesAuthIsSecure     bool
	CookiesAuthIsHttpOnly   bool
	GoogleClientID          string
	GoogleClientSecret      string
	GithubClientID          string
	GithubClientSecret      string
}

var Envs = initConfig()

func initConfig() Config {
	err := godotenv.Load()
	if err != nil {
		panic(err)
	}
	return Config{
		PublicHost:              getEnv("HOST"),
		Port:                    getEnv("PORT"),
		DBHost:                  getEnv("DB_HOST"),
		DBPort:                  getEnv("DB_PORT"),
		DBName:                  getEnv("DB_NAME"),
		DBUser:                  getEnv("DB_USER"),
		DBPassword:              getEnv("DB_PASSWORD"),
		CookiesAuthSecret:       getEnv("COOKIES_AUTH_SECRET"),
		CookiesAuthAgeInSeconds: getEnvAsInt("COOKIES_AUTH_AGE_IN_SECONDS"),
		CookiesAuthIsSecure:     getEnvAsBool("COOKIES_AUTH_IS_SECURE"),
		CookiesAuthIsHttpOnly:   getEnvAsBool("COOKIES_AUTH_IS_HTTP_ONLY"),
		GoogleClientID:          getEnv("GOOGLE_CLIENT_ID"),
		GoogleClientSecret:      getEnv("GOOGLE_CLIENT_SECRET"),
		GithubClientID:          getEnv("GITHUB_CLIENT_ID"),
		GithubClientSecret:      getEnv("GITHUB_CLIENT_SECRET"),
	}
}

func getEnv(key string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}

	panic(fmt.Sprintf("Environment variable %s is not set", key))

}

func getEnvAsInt(key string) int {
	i, err := strconv.Atoi(getEnv(key))
	if err != nil {
		panic(err)
	}

	return i
}

func getEnvAsBool(key string) bool {
	b, err := strconv.ParseBool(getEnv(key))
	if err != nil {
		panic(err)
	}
	return b
}
