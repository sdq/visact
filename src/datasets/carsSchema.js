import FieldType from '../constants/FieldType';

const carsSchema = [
    {
        "name": "Name",
        "type": FieldType.NOMINAL,
    },
    {
        "name": "Cylinders",
        "type": FieldType.NOMINAL,
    },
    {
        "name": "Origin",
        "type": FieldType.NOMINAL,
    },
    {
        "name": "Acceleration",
        "type": FieldType.QUANTITATIVE,
    },
    {
        "name": "Miles_per_Gallon",
        "type": FieldType.QUANTITATIVE,
    },
    {
        "name": "Displacement",
        "type": FieldType.QUANTITATIVE,
    },
    {
        "name": "Horsepower",
        "type": FieldType.QUANTITATIVE,
    },
    {
        "name": "Weight_in_lbs",
        "type": FieldType.QUANTITATIVE,
    },
    {
        "name": "Year",
        "type": FieldType.TEMPORAL,
    },
];

export default carsSchema;