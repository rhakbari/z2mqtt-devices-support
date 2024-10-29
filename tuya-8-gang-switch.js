const tuya = require('zigbee-herdsman-converters/lib/tuya');

const definition = {
    fingerprint: [
        {
            modelID: 'TS0601',
            manufacturerName: '_TZE204_wktrysab',
        },
    ],
    model: 'TS0601_8_way_switch',
    vendor: 'TuYa',
    description: '8 way switch',
    fromZigbee: [tuya.fz.datapoints],
    toZigbee: [tuya.tz.datapoints],
    onEvent: tuya.onEventSetTime,
    configure: tuya.configureMagicPacket,
    exposes: [
        ...Array.from({length: 8}, (_, i) => tuya.exposes.switch().withEndpoint(`l${i + 1}`))
    ],
    endpoint: (device) => {
        return {
            'l1': 1, 'l2': 1, 'l3': 1, 'l4': 1,
            'l5': 1, 'l6': 1, 'l7': 1, 'l8': 1
        };
    },
    meta: {
        multiEndpoint: true,
        tuyaDatapoints: [
            [1, 'state_l1', tuya.valueConverter.onOff],
            [2, 'state_l2', tuya.valueConverter.onOff],
            [3, 'state_l3', tuya.valueConverter.onOff],
            [4, 'state_l4', tuya.valueConverter.onOff],
            [5, 'state_l5', tuya.valueConverter.onOff],
            [6, 'state_l6', tuya.valueConverter.onOff],
            [0x65, 'state_l7', tuya.valueConverter.onOff],
            [0x66, 'state_l8', tuya.valueConverter.onOff],
            [0x67, 'null', null],
            [0x68, 'null', null],
            [0x69, 'null', null],
            [0x6A, 'null', null],
            [0x6B, 'null', null],
            [0x6C, 'null', null],
            [0x6D, 'null', null],
            [0x6E, 'null', null],
            [0xB6, 'null', null],
            [0xB7, 'null', null],
            [0xB8, 'null', null],
            [0xB9, 'null', null],
            [0xBA, 'null', null],
            [0xBB, 'null', null],
            [0xBC, 'null', null],
            [0xBD, 'null', null],
        ],
    },
};

module.exports = definition;