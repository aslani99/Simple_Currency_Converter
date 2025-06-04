// this function (windows.lod) added for rendering all files first and then loads.
window.onload = function () {
  // this takes the Currency type from user.
  const CurrencyType = String(
    prompt(
      "                           *            Currency Converter            *\n\n Write ( d ): Dollars to Tomans \n Write ( t ): Tomans to Dollars"
    )
  );

  // this converts Dollars to Tomans.
  if (
    CurrencyType === null ||
    (CurrencyType.toLowerCase() !== "d" && CurrencyType.toLowerCase() !== "t")
  ) {
    alert("The values must not be empty or wrong value!");
  } else if (CurrencyType.toLowerCase() === "d") {
    const CurrencyValue = Number(
      prompt(
        "Please enter the Dollars value to convert to Tomans. (just number)"
      )
    );
    const DollarRate = Number(
      prompt("Please enter the exact Dollars value. (just number)")
    );

    if (
      isNaN(CurrencyValue) ||
      CurrencyValue <= 0 ||
      isNaN(DollarRate) ||
      DollarRate <= 0
    ) {
      alert("The values must not be empty or wrong value!");
    } else {
      alert(
        ` ${CurrencyValue} Dollars is (${(CurrencyValue * DollarRate).toFixed(
          2
        )}) Tomans.`
      );
    }

    // this converts Tomans to Dollars.
  } else if (CurrencyType.toLowerCase() === "t") {
    const CurrencyValue = Number(
      prompt(
        "Please enter the Tomans value to convert to Dollars. (just number)"
      )
    );
    const DollarRate = Number(
      prompt("Please enter the exact Dollars value. (just number)")
    );

    if (
      isNaN(CurrencyValue) ||
      CurrencyValue <= 0 ||
      isNaN(DollarRate) ||
      DollarRate <= 0
    ) {
      alert("The values must not be empty or wrong value!");
    }
    alert(
      ` ${CurrencyValue} Tomans is ${(CurrencyValue / DollarRate).toFixed(
        2
      )}  Dollars.`
    );

    // This shows errors pop-up.
  }
};
