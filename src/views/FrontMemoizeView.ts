export class FrontMemoizeView {
  showResponse(msg: string) {
    const responseParagraph = document.querySelector('#response');
    if (responseParagraph) {
      responseParagraph.innerHTML += msg + `<br>`;
    }
  }

  sayHello() {
    console.log('hello');
  }
}
