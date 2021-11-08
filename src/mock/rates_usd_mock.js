import Currency from "../models/currency"

const RATES_USD_MOCK = {
    [Currency.AED]: 3.673,
    [Currency.AFN]: 91.000002,
    [Currency.ALL]: 107.025,
    [Currency.AMD]: 477.286397,
    [Currency.ANG]: 1.802173,
    [Currency.AOA]: 597,
    [Currency.ARS]: 99.905,
    [Currency.AUD]: 1.352271,
    [Currency.AWG]: 1.8,
    [Currency.AZN]: 1.700805,
    [Currency.BAM]: 1.695716,
    [Currency.BBD]: 2,
    [Currency.BDT]: 85.773927,
    [Currency.BGN]: 1.691345,
    [Currency.BHD]: 0.377008,
    [Currency.BIF]: 1997,
    [Currency.BMD]: 1,
    [Currency.BND]: 1.353506,
    [Currency.BOB]: 6.904953,
    [Currency.BRL]: 5.5433,
    [Currency.BSD]: 1,
    [Currency.BTC]: 0.000016340425,
    [Currency.BTN]: 74.28728,
    [Currency.BWP]: 11.447608,
    [Currency.BYN]: 2.451112,
    [Currency.BZD]: 2.01565,
    [Currency.CAD]: 1.245408,
    [Currency.CDF]: 2010,
    [Currency.CHF]: 0.912209,
    [Currency.CLF]: 0.029406,
    [Currency.CLP]: 811.4,
    [Currency.CNH]: 6.3988,
    [Currency.CNY]: 6.3989,
    [Currency.COP]: 3868.506465,
    [Currency.CRC]: 640.398455,
    [Currency.CUC]: 1,
    [Currency.CUP]: 25.75,
    [Currency.CVE]: 95.75,
    [Currency.CZK]: 21.8196,
    [Currency.DJF]: 178.025,
    [Currency.DKK]: 6.4298,
    [Currency.DOP]: 56.6,
    [Currency.DZD]: 137.809,
    [Currency.EGP]: 15.720407,
    [Currency.ERN]: 15.00062,
    [Currency.ETB]: 47.25,
    [Currency.EUR]: 0.865688,
    [Currency.FJD]: 2.085,
    [Currency.FKP]: 0.740851,
    [Currency.GBP]: 0.740851,
    [Currency.GEL]: 3.16,
    [Currency.GGP]: 0.740851,
    [Currency.GHS]: 6.1,
    [Currency.GIP]: 0.740851,
    [Currency.GMD]: 52,
    [Currency.GNF]: 9550,
    [Currency.GTQ]: 7.741234,
    [Currency.GYD]: 209.359475,
    [Currency.HKD]: 7.78395,
    [Currency.HNL]: 24.18,
    [Currency.HRK]: 6.502,
    [Currency.HTG]: 98.754554,
    [Currency.HUF]: 310.35,
    [Currency.IDR]: 14319.85,
    [Currency.ILS]: 3.10978,
    [Currency.IMP]: 0.740851,
    [Currency.INR]: 74.19115,
    [Currency.IQD]: 1460,
    [Currency.IRR]: 42250,
    [Currency.ISK]: 129.84,
    [Currency.JEP]: 0.740851,
    [Currency.JMD]: 155.241804,
    [Currency.JOD]: 0.709,
    [Currency.JPY]: 113.415,
    [Currency.KES]: 111.6,
    [Currency.KGS]: 84.798902,
    [Currency.KHR]: 4072,
    [Currency.KMF]: 426.299814,
    [Currency.KPW]: 900,
    [Currency.KRW]: 1181.5,
    [Currency.KWD]: 0.301955,
    [Currency.KYD]: 0.833348,
    [Currency.KZT]: 429.575065,
    [Currency.LAK]: 10360,
    [Currency.LBP]: 1527.84889,
    [Currency.LKR]: 201.497397,
    [Currency.LRD]: 147.649993,
    [Currency.LSL]: 15.09,
    [Currency.LYD]: 4.555,
    [Currency.MAD]: 9.0845,
    [Currency.MDL]: 17.479552,
    [Currency.MGA]: 3967.5,
    [Currency.MKD]: 53.288654,
    [Currency.MMK]: 1807.978797,
    [Currency.MNT]: 2851.992224,
    [Currency.MOP]: 8.019334,
    [Currency.MRO]: 356.999828,
    [Currency.MRU]: 36.3,
    [Currency.MUR]: 43.15,
    [Currency.MVR]: 15.45,
    [Currency.MWK]: 815,
    [Currency.MXN]: 20.3412,
    [Currency.MYR]: 4.16,
    [Currency.MZN]: 63.849999,
    [Currency.NAD]: 15.09,
    [Currency.NGN]: 410.52,
    [Currency.NIO]: 35.225,
    [Currency.NOK]: 8.57586,
    [Currency.NPR]: 118.859851,
    [Currency.NZD]: 1.405879,
    [Currency.OMR]: 0.384996,
    [Currency.PAB]: 1,
    [Currency.PEN]: 4.0175,
    [Currency.PGK]: 3.53,
    [Currency.PHP]: 50.342996,
    [Currency.PKR]: 170.15,
    [Currency.PLN]: 3.97525,
    [Currency.PYG]: 6889.520368,
    [Currency.QAR]: 3.641,
    [Currency.RON]: 4.2787,
    [Currency.RSD]: 101.948123,
    [Currency.RUB]: 71.1486,
    [Currency.RWF]: 1005,
    [Currency.SAR]: 3.750973,
    [Currency.SBD]: 8.022495,
    [Currency.SCR]: 13.994033,
    [Currency.SDG]: 441.5,
    [Currency.SEK]: 8.789025,
    [Currency.SGD]: 1.350622,
    [Currency.SHP]: 0.740851,
    [Currency.SLL]: 10863.35017,
    [Currency.SOS]: 586,
    [Currency.SRD]: 21.502,
    [Currency.SSP]: 130.26,
    [Currency.STD]: 20956.440504,
    [Currency.STN]: 21.55,
    [Currency.SVC]: 8.749973,
    [Currency.SYP]: 1257.694008,
    [Currency.SZL]: 15.09,
    [Currency.THB]: 33.257737,
    [Currency.TJS]: 11.269443,
    [Currency.TMT]: 3.5,
    [Currency.TND]: 2.8395,
    [Currency.TOP]: 2.247048,
    [Currency.TRY]: 9.6911,
    [Currency.TTD]: 6.7912,
    [Currency.TWD]: 27.8451,
    [Currency.TZS]: 2301,
    [Currency.UAH]: 26.101639,
    [Currency.UGX]: 3552.896508,
    [Currency.USD]: 1,
    [Currency.UYU]: 43.990579,
    [Currency.UZS]: 10700,
    [Currency.VES]: 4.41785,
    [Currency.VND]: 22642.524891,
    [Currency.VUV]: 111.224217,
    [Currency.WST]: 2.568092,
    [Currency.XAF]: 567.854401,
    [Currency.XAG]: 0.04139079,
    [Currency.XAU]: 0.00055011,
    [Currency.XCD]: 2.70255,
    [Currency.XDR]: 0.709989,
    [Currency.XOF]: 567.854401,
    [Currency.XPD]: 0.00049009,
    [Currency.XPF]: 103.304111,
    [Currency.XPT]: 0.0009635,
    [Currency.YER]: 250.35002,
    [Currency.ZAR]: 15.0435,
    [Currency.ZMW]: 17.381604,
    [Currency.ZWL]: 322
}

export default RATES_USD_MOCK