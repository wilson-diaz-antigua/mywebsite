/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        top: "top 0.3s  forwards",
        btm: "btm 0.3s  forwards",
        mid: "mid 0.3s  forwards",
        appear: "appear 0.3s ease-in-out",
        "top-reverse": "topReverse 0.7s forwards",
        btmReverse: "btmReverse 0.7s forwards",
        "mid-reverse": "midReverse 0.7s forwards",
        blob: "blob 7s ease-in-out infinite",
        blob2: "blob 20s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            d: "path('M220,365.27556638233364C252.7308145062727,359.67115035135964,280.6982052906718,343.88867675015774,307.47323892832185,324.2465467486793C336.5393593566981,302.92367844460415,380.6833185286171,284.18575996223876,379.6565177493238,248.15175172516572C378.59965919693957,211.0629117573521,329.5364648336091,198.07229842691729,303.1349809705544,172.00199635757602C286.57954418836897,155.65423196523324,272.33011134462186,139.88760877204675,254.6731822609404,124.73621467743173C221.9932315682227,96.693579993263,193.84730263804178,24.448868846024034,156.83845758662147,46.465088441317036C116.43742810361371,70.49928717780716,164.39144237379415,136.92690080238876,156.32962105517242,183.23988957679828C152.62288526572624,204.5340867837977,129.92381405334868,216.29365763346985,123.67419364947966,236.9848385980955C111.35635833384055,277.76660503155125,77.5944491433553,325.1608628228088,103.1736153621254,359.22826360198C127.3148823079248,391.38061013765423,180.37011150458608,372.06129370808793,220,365.27556638233364')",
          },
          "50%": {
            d: "path('M220,304.7628413036C238.8386158135346,305.435541876153,253.99189426160754,289.2693575008605,265.7820376977315,274.5609079025551C275.70467207893137,262.1822147620523,271.0503439957021,243.90480271916255,279.5308292763148,230.49689138536368C299.1963645006113,199.4050677580233,345.3064668181966,183.7481794385057,346.4781850783977,146.97778579837183C347.82800053551045,104.6184171809925,325.0732612566069,55.19091244095095,285.6094685182279,39.73946674375002C246.1126007442591,24.275071021199594,200.48406051517327,49.833665670643285,167.98565432705908,77.09175977588754C141.96634779618333,98.91549789604188,150.74741704985573,140.9183722205924,131.5667659812812,168.94304853398347C109.18507755495425,201.6447316652016,33.58331007122018,213.80335334404924,49.61389690965696,250.04366711260138C67.55583953362688,290.6049788638957,134.65351146227061,257.8249015784104,176.8816898278327,271.3864010542718C194.72484062055688,277.1166951254123,201.27122438878723,304.09406297075515,220,304.7628413036')",
          },

          "100%": {
            d: "path('M220,365.27556638233364C252.7308145062727,359.67115035135964,280.6982052906718,343.88867675015774,307.47323892832185,324.2465467486793C336.5393593566981,302.92367844460415,380.6833185286171,284.18575996223876,379.6565177493238,248.15175172516572C378.59965919693957,211.0629117573521,329.5364648336091,198.07229842691729,303.1349809705544,172.00199635757602C286.57954418836897,155.65423196523324,272.33011134462186,139.88760877204675,254.6731822609404,124.73621467743173C221.9932315682227,96.693579993263,193.84730263804178,24.448868846024034,156.83845758662147,46.465088441317036C116.43742810361371,70.49928717780716,164.39144237379415,136.92690080238876,156.32962105517242,183.23988957679828C152.62288526572624,204.5340867837977,129.92381405334868,216.29365763346985,123.67419364947966,236.9848385980955C111.35635833384055,277.76660503155125,77.5944491433553,325.1608628228088,103.1736153621254,359.22826360198C127.3148823079248,391.38061013765423,180.37011150458608,372.06129370808793,220,365.27556638233364')",
          },
        },
        blob2: {
          "0%": {
            d: "path('M220,323.04029862512834C260.69775963244433,318.72582110176967,295.5649040769783,369.3496218594936,334.344522577358,356.2704955750362C377.57962318283575,341.6886775322742,423.1313987898299,300.9347208220884,420.6255758008567,255.37570203386238C418.059755288399,208.7258526834996,353.0184215520919,196.47263406217408,323.56081655309333,160.20913468557413C301.8993984969744,133.54305574938624,300.8824973276206,94.19965084134408,273.1862578774519,73.87195745641043C238.04438118200255,48.07952828126883,195.40255025069914,26.67478675421148,152.55638703803692,34.70019630056934C105.93755102253769,43.432255919114425,60.5483032708393,73.56808855505551,41.92576450116853,117.18879219901272C24.0835819145165,158.98162015871426,54.521760556247635,203.04435382596583,61.518132562108235,247.94462918236258C68.75116527471732,294.3637104127387,40.87180511634104,362.76492249985654,83.32608756989936,382.88162615247876C129.6666480847131,404.83981903897234,169.0060309191524,328.44630464150794,220,323.04029862512834')",
          },
          "25%": {
            d: "path('M220,419.82416004291736C263.3357773322962,411.35489708742864,286.11819016351006,367.08656933798363,316.67090748124355,335.2079012901145C342.6801496346204,308.06988969653054,375.79021007193563,285.60716902407665,383.8271208899961,248.8871415846937C392.06518185904963,211.24807457511872,377.14885877984193,173.70891145517967,359.51639302346314,139.45017293153802C340.9244631015451,103.32725769976226,320.6083298997451,62.17354997158932,281.70423854260525,50.46899791955053C243.4412671420458,38.957331027956926,203.58922715494396,60.89112226008011,169.92102951931662,82.4091594147878C142.4678200920387,99.95506985719958,133.12009172417706,132.5854939136553,113.05575412869469,158.2557108579203C87.4905610816652,190.96369578970413,42.30895846020638,211.04005199255724,37.18117404176326,252.23589159788213C31.367550838292914,298.94165562231353,50.70943364688933,348.6009574799463,85.40406263842975,380.4051918992365C120.93693433441172,412.97783538492195,172.6916469897628,429.0697973961485,220,419.82416004291736')",
          },
          "50%": {
            d: "path('M220,304.7628413036C238.8386158135346,305.435541876153,253.99189426160754,289.2693575008605,265.7820376977315,274.5609079025551C275.70467207893137,262.1822147620523,271.0503439957021,243.90480271916255,279.5308292763148,230.49689138536368C299.1963645006113,199.4050677580233,345.3064668181966,183.7481794385057,346.4781850783977,146.97778579837183C347.82800053551045,104.6184171809925,325.0732612566069,55.19091244095095,285.6094685182279,39.73946674375002C246.1126007442591,24.275071021199594,200.48406051517327,49.833665670643285,167.98565432705908,77.09175977588754C141.96634779618333,98.91549789604188,150.74741704985573,140.9183722205924,131.5667659812812,168.94304853398347C109.18507755495425,201.6447316652016,33.58331007122018,213.80335334404924,49.61389690965696,250.04366711260138C67.55583953362688,290.6049788638957,134.65351146227061,257.8249015784104,176.8816898278327,271.3864010542718C194.72484062055688,277.1166951254123,201.27122438878723,304.09406297075515,220,304.7628413036')",
          },
          "75%": {
            d: "path('M220,293.5005877073854C230.33537179867858,287.53588577838116,243.19568313967088,289.6914634168794,254.3460287708639,285.4408903233164C266.58917490872926,280.7737356650261,276.17960793216594,271.52649874083204,288.5988139706665,267.35034245414937C321.68272030583927,256.22535080803823,362.93991666802634,264.49676467514905,388.2156834313817,240.42508189132633C412.5001363794123,217.29748883285725,442.33274710350236,166.95456539022317,416.6129240143722,145.43455340307253C381.4604616971442,116.02216561863568,321.84861033332595,172.11090647475964,281.2180123447187,150.8991486684294C254.0086898106622,136.69415075457727,280.7902543479528,84.30269742830589,258.69868321011523,62.99327033237666C239.00262138927215,43.99454041726867,205.91501684775946,52.69401745081141,178.56142115116978,51.87707675210522C143.85724399696977,50.84060406870184,97.21791273015043,30.001568607198134,76.07207427256928,57.53895598326237C52.79425398409333,87.85273880346338,96.63522557425148,132.69601346097667,87.92424855424468,169.91027451248502C80.87906313183136,200.00808889815156,36.87473619394433,212.10877919047903,32.72094486695862,242.73979429024482C28.64235339142447,272.8162683444967,43.193391984408365,306.66367550708156,66.79087815106062,325.7526211713932C90.60153819943928,345.0140116722686,125.83808472132793,348.61795821016375,155.80719894156158,342.30916364850145C182.49888070548604,336.6903009915539,196.37529608371975,307.134767470479,220,293.5005877073854')",
          },

          "100%": {
            d: "path('M220,323.04029862512834C260.69775963244433,318.72582110176967,295.5649040769783,369.3496218594936,334.344522577358,356.2704955750362C377.57962318283575,341.6886775322742,423.1313987898299,300.9347208220884,420.6255758008567,255.37570203386238C418.059755288399,208.7258526834996,353.0184215520919,196.47263406217408,323.56081655309333,160.20913468557413C301.8993984969744,133.54305574938624,300.8824973276206,94.19965084134408,273.1862578774519,73.87195745641043C238.04438118200255,48.07952828126883,195.40255025069914,26.67478675421148,152.55638703803692,34.70019630056934C105.93755102253769,43.432255919114425,60.5483032708393,73.56808855505551,41.92576450116853,117.18879219901272C24.0835819145165,158.98162015871426,54.521760556247635,203.04435382596583,61.518132562108235,247.94462918236258C68.75116527471732,294.3637104127387,40.87180511634104,362.76492249985654,83.32608756989936,382.88162615247876C129.6666480847131,404.83981903897234,169.0060309191524,328.44630464150794,220,323.04029862512834')",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0px)",
          },
        },

        top: {
          "0%": { transform: "translateY(20px)", rotate: "0deg" },
          "50%": { transform: "translateY(20px)", rotate: "0deg" },
          "100%": {
            rotate: " 45deg ",
            transformOrigin: "25% 35%",
          },
        },
        topReverse: {
          "10%": { transform: "translateY(20px)", rotate: "0deg" },
          "50%": { transform: "translateY(20px)", rotate: "0deg" },
          "0%": {
            rotate: " 45deg ",
            transformOrigin: "25% 35%",
          },
        },
        mid: {
          "0%": { transformOrigin: "100% 50%", opacity: "100" },
          "25%": { transformOrigin: "100% 50%", opacity: "0" },
          "100%": { transformOrigin: "100% 50%", opacity: "0" },
        },
        btm: {
          "0%": { transform: "translateY(-20px)", rotate: "0deg" },
          "50%": { transform: "translateY(-20px)", rotate: "0deg" },

          "100%": {
            rotate: " -45deg ",
            transformOrigin: "25% 60%",
          },
        },
        btmReverse: {
          "0%": {
            rotate: " -45deg ",
            transformOrigin: "25% 60%",
          },
          "50%": { transform: "translateY(-20px)", rotate: "0deg" },
          "100%": { transform: "translateY(0px)", rotate: "0deg" },
        },
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        code: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
