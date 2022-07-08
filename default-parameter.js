// Default value parameter function
function register(username = "unknown", password = "unknown") {
  console.log(username);
  console.log(password);
}

register(); // unknown unknown
register("ucup") // ucup unknown