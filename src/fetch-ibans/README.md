# IBAN fetcher

Fetch many sample IBANs from several websites, in parallel.

Example:

    docker run -v ${PWD}:/code \
               -w /code \
               --rm \
               node:alpine \
               node src/fetch-ibans/run.js

    [
      'AD1200012030200359100100',
      'AD1400080001001234567890',
      'AE070331234567890123456',
      'AE460090000000123456789',
      'AL35202111090000000001234567',
      'AL47212110090000000235698741',
      'AL90208110080000001039531801',
      'AO06004400006729503010102',
      'AT022050302101023600',
      'AT411100000237571500',
      'AT483200000012345864',
      'AT611904300234573201',
      'AT611904300234573278',
      'AT611904300234963104',
      'AX2112345600000785',
      'AZ21NABZ00000000137010001944',
      'AZ96AZEJ00000000001234567890',
      'BA391290079401028494',
      'BA393385804800211234',
      'BE65539007547034',
      'BE68539005786098',
      'BE68539007547034',
      'BE68844010370034',
      'BE71096123456769',
      'BF42BF0840101300463574000390',
      'BG18RZBB91550123456789',
      'BG80BNBG96611020345678',
      'BH02CITI00001077181611',
      'BH67BMAG00001299123456',
      'BI43201011067444',
      'BJ66BJ0610100100144390000769',
      'BL6820041010050500013M02606',
      'BR1500000000000010932840814P2',
      'BR1800000000141455123924100C2',
      'BR1800360305000010009795493C1',
      'BR9700360305000010009795493P1',
      'BY13NBRB3600900000002Z00AB00',
      'BY86AKBB10100000002966000000',
      'CF4220001000010120069700160',
      'CG3930011000101013451300019',
      'CH3908704016075473007',
      'CH5604835012345678009',
      'CH9300762011623852957',
      'CI93CI0080111301134291200589',
      'CM2110002000300277976315008',
      'CR05015202001026284066',
      'CR051202001026284066',
      'CR23015108410026012345',
      'CV64000500000020108215144',
      'CY17002001280000001200527600',
      'CY21002001950000357001234567',
      'CY67002001280000001218194900',
      'CZ4201000000195505030267',
      'CZ5508000000001234567899',
      'CZ6508000000192000145399',
      'CZ8406000000001920001485',
      'DD92ADD482CB34DFF3178ED5EB1BA3',
      'DE11520513735120710131',
      'DE12500105170648489890',
      'DE27100777770209299700',
      'DE75512108001245126199',
      'DE89370400440532013000',
      'DE89370400440532013087',
      'DE91100000000123456789',
      'DJ2110002010010409943020008',
      'DK5000400440116243',
      'DK5750510001322617',
      'DK9520000123456789',
      'DO22ACAU00000000000123456789',
      'DO28BAGR00000001212453611324',
      'DZ580002100001113000000570',
      'EE342200221034126658',
      'EE382200221020145685',
      'EE471000001020145685',
      'EG2100037000671002392189379',
      'EG800002000156789012345180002',
      'ES1020903200500041045040',
      'ES7921000813610123456789',
      'ES9121000418450200051322',
      'ES9121000418450200051332',
      'FI1410093000123458',
      'FI2112345600000785',
      'FI2112345600000786',
      'FI211235600000785',
      'FI9814283500171141',
      'FO2000400440116243',
      'FO6264600001631634',
      'FO9264600123456789',
      'FR1420041010050500013M02606',
      'FR1420041010050500013M02607',
      'FR7630006000011234567890189',
      'FR7630066100410001057380116',
      'GA2140021010032001890020126',
      'GB12NWBK60161331926819',
      'GB15CLYD82663220400952',
      'GB17BOFS80055100813796',
      'GB21SCBL60910417068859',
      'GB24BKEN10000031510604',
      'GB25NWBK60080600724890',
      'GB26MIDL40051512345674',
      ... 185 more items
    ]