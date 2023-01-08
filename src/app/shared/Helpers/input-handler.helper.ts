export class INPUT_TOOLS {
  static keyPressNumbers(event: any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if (
        (charCode < 48 || charCode > 57)
        && charCode != 43
        && charCode != 40
        && charCode != 41
        && charCode != 45
        ) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
}
