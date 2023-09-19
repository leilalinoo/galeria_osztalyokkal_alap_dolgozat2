class Kartya {
    #kepem = {};
    constructor(kepem, index, szuloelem) {
        szuloelem.append("<div class='kartya'>");
        this.#kepem = kepem;
        this.tarolo = szuloelem.children("div:last-child");
        this.tarolo.append(`<img src="${this.#kepem.kep}" alt="">`);
        this.kepImg = this.tarolo.children("img");
        this.kepImg.on("click",()=>{
            this.esemenyTrigger()

        })
    }



    esemenyTrigger() {
       // console.log(this.#kepem.kep)
        const esemenyem = new CustomEvent("esemenyem", { detail: this });
        window.dispatchEvent(esemenyem);
      }
}
export default Kartya;
