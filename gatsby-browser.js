const onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementById("___loader").style.display = "none"
  }, 1000)
}

export {
  onInitialClientRender
}
