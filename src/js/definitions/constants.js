'use strict';

/**
 * System types
 */
export const systemTypes = {
    SYSTYPE_AUCTION: 'auction',
    SYSTYPE_LIBRARY: 'library',
    SYSTYPE_ADSERVER: 'adserver',
    SYSTYPE_WRAPPER: 'wrapper',
};

/**
 * System ids
 */
export const systemIds = {
    // Auction calls
    SYSID_AUC_33ACROSS: 'a-33ac',
    SYSID_AUC_A4G: 'a-a4g',
    SYSID_AUC_ADBLADE: 'a-adbd',
    SYSID_AUC_ADBUND: 'a-adbund',
    SYSID_AUC_ADBUTLER: 'a-adbr',
    SYSID_AUC_ADEQUANT: 'a-adeq',
    SYSID_AUC_ADFORM: 'a-adfm',
    SYSID_AUC_ADKERNEL: 'a-adkernel',
    SYSID_AUC_ADMEDIA: 'a-adma',
    SYSID_AUC_ADMIXER: 'a-admxr',
    SYSID_AUC_ADOCEAN: 'a-adocean',
    SYSID_AUC_ADSUPPLY: 'a-adsupply',
    SYSID_AUC_ADYOULIKE: 'a-adulike',
    SYSID_AUC_ADXCG: 'a-adxcg',
    SYSID_AUC_AERSERV: 'a-aerserv',
    SYSID_AUC_AMAZON: 'a-amzn',
    SYSID_AUC_AOL: 'a-aol',
    SYSID_AUC_APPNEXUS: 'a-apnx',
    SYSID_AUC_ARTEEBEE: 'a-artb',
    SYSID_AUC_ATOMX: 'a-atomx',
    SYSID_AUC_ASCIENCE: 'a-ausc',
    SYSID_AUC_BEACHFRONT: 'a-bchfr',
    SYSID_AUC_BIDFLUENCE: 'a-bidfl',
    SYSID_AUC_BRIDGEWELL: 'a-bgwell',
    SYSID_AUC_BRIGHTCOM: 'a-btcm',
    SYSID_AUC_C1X: 'a-c1x',
    SYSID_AUC_CARAMBOLA: 'a-caramb',
    SYSID_AUC_CASALEMEDIA: 'a-casm',
    SYSID_AUC_CENTRO: 'a-cntr',
    SYSID_AUC_CONVERSANT: 'a-cnvr',
    SYSID_AUC_COX: 'a-cox',
    SYSID_AUC_CRITEO: 'a-crit',
    SYSID_AUC_CROWDC: 'a-crdc',
    SYSID_AUC_DISTROSCALE: 'a-dtsc',
    SYSID_AUC_EPLANNING: 'a-eplan',
    SYSID_AUC_ESSENS: 'a-essens',
    SYSID_AUC_FACEBOOK_AN: 'a-fan',
    SYSID_AUC_FEATURE_FORWARD: 'a-ffwd',
    SYSID_AUC_FIDELITY: 'a-fidel',
    SYSID_AUC_FREEWHEEL: 'a-freewh',
    SYSID_AUC_GETINTENT: 'a-getint',
    SYSID_AUC_GUMGUM: 'a-gumgum',
    SYSID_AUC_HIRO: 'a-hiro',
    SYSID_AUC_HUDDLED_MASSES: 'a-hudmass',
    SYSID_AUC_IMONOMY: 'a-imonomy',
    SYSID_AUC_IMPROVE_DIGITAL: 'a-imprdig',
    SYSID_AUC_INNERACTIVE: 'a-innera',
    SYSID_AUC_INNITY: 'a-innity',
    SYSID_AUC_IQM: 'a-iqm',
    SYSID_AUC_JCM: 'a-jcm',
    SYSID_AUC_JUST_PREMIUM: 'a-jstprm',
    SYSID_AUC_KARGO: 'a-kargo',
    SYSID_AUC_KRUX: 'a-krux',
    SYSID_AUC_KOMOONA: 'a-komo',
    SYSID_AUC_KUMMA: 'a-kumma',
    SYSID_AUC_LIFESTREET: 'a-lifest',
    SYSID_AUC_LIJIT: 'a-lijt',
    SYSID_AUC_MANTIS: 'a-mantis',
    SYSID_AUC_MARS_MEDIA: 'a-mmedia',
    SYSID_AUC_MEDIANET: 'a-mdnt',
    SYSID_AUC_MEME_GLOBAL: 'a-memg',
    SYSID_AUC_MOBFOX: 'a-mbfox',
    SYSID_AUC_NANO_INTERACTIVE: 'a-nintera',
    SYSID_AUC_NASMEDIA: 'a-nasmed',
    SYSID_AUC_NET_AVENIR: 'a-ntav',
    SYSID_AUC_NGINAD: 'a-ngina',
    SYSID_AUC_OPENX: 'a-opnx',
    SYSID_AUC_OPTIMATIC: 'a-optmic',
    SYSID_AUC_PIXI: 'a-piximd',
    SYSID_AUC_PLATFORM_IO: 'a-plio',
    SYSID_AUC_POLLUX: 'a-pollux',
    SYSID_AUC_APPNEXUS_PREBID_SERVER: 'a-apbserv',
    SYSID_AUC_PROXIMIC: 'a-pxmc',
    SYSID_AUC_PUBGEARS: 'a-pubgrs',
    SYSID_AUC_PUBMATIC: 'a-pbmt',
    SYSID_AUC_PUBMATIC_OPENWRAP_S2S: 'a-pows2s',
    SYSID_AUC_PULSEPOINT: 'a-plse',
    SYSID_AUC_QUANTCAST: 'a-quantcst',
    SYSID_AUC_READPEAK: 'a-rdpeak',
    SYSID_AUC_RHYTHMONE: 'a-r1',
    SYSID_AUC_ROXOT: 'a-roxot',
    SYSID_AUC_RTB_DEMAND: 'a-rdmnd',
    SYSID_AUC_RP_FL_STANDARD: 'a-rp-fl',
    SYSID_AUC_RP_FL_MAS: 'a-rp-fs',
    SYSID_AUC_RP_FL_FRANK: 'a-rp-fm',
    SYSID_AUC_RTKIO: 'a-rtk',
    SYSID_AUC_SEKINDO: 'a-sekindo',
    SYSID_AUC_SERVERBID: 'a-srvbid',
    SYSID_AUC_SHARETHROUGH: 'a-shrthru',
    SYSID_AUC_SMARTYADS: 'a-smads',
    SYSID_AUC_SMARTRTBP: 'a-smrtbp',
    SYSID_AUC_SOMO_AUDIENCE: 'a-somoau',
    SYSID_AUC_SONOBI: 'a-snbi',
    SYSID_AUC_SPOTX: 'a-spotx',
    SYSID_AUC_SPRING_SERVE: 'a-spring',
    SYSID_AUC_TAPSENSE: 'a-tapsns',
    SYSID_AUC_THOUGHT_LEADR: 'a-thoughtldr',
    SYSID_AUC_TREMOR: 'a-tremor',
    SYSID_AUC_TRION: 'a-trion',
    SYSID_AUC_TRIPLE_LIFT: 'a-3lift',
    SYSID_AUC_TRUSTX: 'a-trustx',
    SYSID_AUC_TWENGA: 'a-twenga',
    SYSID_AUC_UCFUNNEL: 'a-ucfun',
    SYSID_AUC_UNDERDOG: 'a-udm',
    SYSID_AUC_UNDERTONE: 'a-utone',
    SYSID_AUC_UNRULY: 'a-unruly',
    SYSID_AUC_VERTAMEDIA: 'a-vertam',
    SYSID_AUC_VERTOZ: 'a-vertoz',
    SYSID_AUC_WIDEORBIT: 'a-worb',
    SYSID_AUC_WIDESPACE: 'a-widesp',
    SYSID_AUC_YIELDBOT: 'a-yldb',
    SYSID_AUC_YIELDMO: 'a-ymo',

    // Libraries
    SYSID_LIB_AMAZON: 'l-amzn',
    SYSID_LIB_ASCIENCE: 'l-ausc',
    SYSID_LIB_ATOMX: 'l-atomx',
    SYSID_LIB_BIDFLUENCE: 'l-bflu',
    SYSID_LIB_COX: 'l-cox',
    SYSID_LIB_CRITEO: 'l-crit',
    SYSID_LIB_FREEWHEEL: 'l-freewh',
    SYSID_LIB_GETINTENT: 'l-getint',
    SYSID_LIB_NET_AVENIR: 'l-ntav',
    SYSID_LIB_OPENX: 'l-opnx',
    SYSID_LIB_PUBMATIC: 'l-pbmt',
    SYSID_LIB_PULSEPOINT: 'l-plse',
    SYSID_LIB_RP_HIGHLANDER: 'l-rp-hl',
    SYSID_LIB_SONOBI: 'l-snbi',
    SYSID_LIB_SPOTX: 'l-spotx',
    SYSID_LIB_UNDERDOG: 'l-udm',
    SYSID_LIB_VERTAMEDIA: 'l-vertam',
    SYSID_LIB_YIELDBOT: 'l-yldb',

    // Ad servers
    SYSID_AS_DFP: 's-dfp',

    // Wrappers
    SYSID_WRAP_BEANSTOCK: 'w-bnst',
    SYSID_WRAP_BREALTIME: 'w-brlt',
    SYSID_WRAP_DISTRICTM: 'w-districtm',
    SYSID_WRAP_INDEX: 'w-indx',
    SYSID_WRAP_MEDIANET: 'w-mdnt',
    SYSID_WRAP_PREBID: 'w-prbd',
    SYSID_WRAP_PUBFOOD: 'w-pubf',
    SYSID_WRAP_PUBMATIC_OPENWRAP: 'w-pbmt',
    SYSID_WRAP_SORTABLE: 'w-sort',
    SYSID_WRAP_TECHNORATI: 'w-tcrm',
};

/**
 * Constants for the call results
 */
export const responseTypes = {
    SUCCESS:     'success',
    REDIRECT:    'redirect',
    ERROR:       'error',
};
