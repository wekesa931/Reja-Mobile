import Colors from "../../colors/Colors";

export const formatNumber = (num: number | string) => {
    const si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "K" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "B" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    // @ts-ignore
    return (num / si[i].value).toFixed(2).replace(rx, "$1") + si[i].symbol;
  }

export const activeBackColor = (activeCard: string, color: string, card: string) => {
  if(activeCard === card){
        return color
    } else {
        return Colors.white
    }
}
export const activeTextColor = (activeCard: string, card: string) => {
  if(activeCard === card){
        return Colors.white
    } else {
        return Colors.black
    }
}
export const activeIconColor = (activeCard: string, color: string,card: string) => {
  if(activeCard === card){
        return Colors.white
    } else {
        return color
    }
}