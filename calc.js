const display = (content) => {
  displayscreen.value += content;
};

showresult = () => {
  try {
    displayscreen.value = eval(displayscreen.value);
  } catch {
    displayscreen.value = "";
    displayscreen.placeholder = "invald";
  } finally {
    console.log("enter a value");
  }
};

zeroscreen = () => {
  displayscreen.value = "";
};

remove = () => {
  displayscreen.value = displayscreen.value.slice(0, -1);
};
