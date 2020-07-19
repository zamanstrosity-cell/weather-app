
export const kelvinConversion = (kelvin) => {
    const kel = parseInt(kelvin)
    const kelvinToCelsius = Math.round(kel - 273.15);
    const kelvinToFehrenheit = Math.round(9/5 * (kel - 273) + 32);
    return { kelvinToCelsius, kelvinToFehrenheit}
} 


export const celsiusConversion = (celsius) => {
    return Math.round((celsius / 5) * 9 + 32);
}

export const fehrenheitConversion = (fehr) => {
    return Math.round((fehr - 32) * 5 / 9);
}
