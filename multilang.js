var langs = {
    en: {
        text1: 'I WILL HOLD EVERYTHING THAT I SEE IN YOUR MEMBER AREA IN CONFIDENCE.',
        text2: 'I WILL RESPECT THE PRIVACY OF MY FELLOW MEMBERS',
        btn: 'I AGREE'
    },
    fr: {
        text1: 'JE GARDERAI TOUT CE QUE JE VOIS DANS VOTRE ESPACE MEMBRE CONFIDENTIEL.',
        text2: 'JE RESPECTERAI LA VIE PRIVÉE DE MES CO-MEMBRES.',
        btn: "JE SUIS D'ACCORD"
    },
    es: {
        text1: 'MANTENDRÉ TODO LO QUE VEA EN SU ÁREA DE MIEMBROS EN CONFIDENCIALIDAD.',
        text2: 'RESPETARÉ LA PRIVACIDAD DE MIS COMPAÑEROS MIEMBROS',
        btn: 'ESTOY DE ACUERDO'
    },
    it: {
        text1: 'MANTERRÒ TUTTO CIÒ CHE VEDO NELLA VOSTRA AREA MEMBRI IN CONFIDENZA.',
        text2: 'RISPETTERÒ LA PRIVACY DEI MIEI COLLEGHI MEMBRI',
        btn: "SONO D'ACCORDO"
    },
    de: {
        text1: 'ICH WERDE ALLES, WAS ICH IN IHREM MITGLIEDSBEREICH SEHE, VERTRAULICH BEHANDELN.',
        text2: 'ICH WERDE DIE PRIVATSPHÄRE MEINER MITGLIEDER RESPEKTIEREN',
        btn: 'ICH BIN EINVERSTANDEN'
    },
    cz: {
        text1: 'VŠE, CO VIDÍM VE VAŠÍ ČLENSKÉ OBLASTI, DRŽÍM V DŮVĚŘE.',
        text2: 'BUDU RESPEKTOVAT SOUKROMÍ SVÝCH SPOLUČLENŮ',
        btn: 'SOUHLASÍM'
    },
    be: {
        text1: 'Я БУДУ ТРЫМАЦЬ УСЁ, ШТО БАЧУ Ў ВАШЫМ ПАНЕЦЫ УЧАЛЬНІКА.',
        text2: 'Я БУДУ ПАВАЖАЦЬ КАНФІДЭНЦЭЙНАСЦЬ МАІХ ПАРУЖНІКАЎ',
        btn: 'Я ЗГОДНЫ'
    },
    be: {
        text1: 'Я БУДУ ТРЫМАЦЬ УСЁ, ШТО БАЧУ Ў ВАШЫМ ПАНЕЦЫ УЧАЛЬНІКА.',
        text2: 'Я БУДУ ПАВАЖАЦЬ КАНФІДЭНЦЭЙНАСЦЬ МАІХ ПАРУЖНІКАЎ',
        btn: 'Я ЗГОДНЫ'
    },
    dn: {
        text1: 'JEG VIL HOLDE FORTROLIG ALT, AT JEG SER I DIT MEDLEMSOMRÅDE.',
        text2: 'JEG VIL RESPEKTERE MINE MEDLEMMERS PRIVATLIV',
        btn: 'JEG ER ENIG'
    },
    pt: {
        text1: 'GUARDAREI TUDO O QUE VEJO NA SUA ÁREA DE MEMBRO COM CONFIANÇA.',
        text2: 'RESPEITAREI A PRIVACIDADE DOS MEUS MEMBROS',
        btn: 'CONCORDO'
    },
    nl: {
        text1: 'IK ZAL ALLES WAT IK ZIE IN UW LIDGEBIED IN VERTROUWEN HOUDEN.',
        text2: 'IK ZAL DE PRIVACY VAN MIJN MEDELEIDEN RESPECTEREN',
        btn: 'IK GA AKKOORD'
    }

};
$(function () {
    var langBrowser = (((navigator.language || navigator.languages) || '').split('-') || [])[0],
        param = langs[langBrowser];
    if (param == undefined) {
        param = langs['en'];
        // 'en' - default language, if you want change language, please select in object abbreviation. Example: 'fr', 'ru' etc.
    } else {
        $('.text1').text(param['text1']);
        $('.text2').text(param['text2']);
        $('.btn').text(param['btn']);
    }
});