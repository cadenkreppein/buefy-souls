import Vue from "vue";
import speedsouls from "./speedsouls";
import { SnackbarProgrammatic as Snackbar } from "buefy";

const SERVER_URL = "https://www.speedrun.com";
const BASE_URL = `${SERVER_URL}/api/v1`;

function showError(error) {
  Snackbar.open({
    indefinite: true,
    message: error.message,
    type: "is-danger",
    position: "is-bottom",
    actionText: "Try again",
    queue: false,
    onAction: () => {
      window.location.reload();
    }
  });
}

function errorHandler(response) {
  if (!response.ok) showError(new Error("Something broke"));
  return response;
}

Vue.use(speedsouls, {
  BASE_URL,
  errorHandler
});
