const requiredMessage = 'This field is required!';

export const required = [{ required: true, message: requiredMessage }];

export const requiredInput = [
    { required: true, message: requiredMessage },
    { whitespace: true, message: requiredMessage },
];

export const numberRequired =
    () => ({
        validator(_, value) {
            if (!value || /^([1-9][0-9]*|0)(\.[0-9]{0,2})?$/.test(value.toString())) {
            return Promise.resolve();
            }
            return Promise.reject(new Error('Only decimal numbers up to 2 floating points are allowed!'));
        },
    })

export const conditionalFormRule = (condition, message) =>
    () => ({
        validator(_, value) {
            if (condition(value)) {
                return Promise.resolve();
            }
            return Promise.reject(new Error(message));
        },
    })

function useFormRules() {
    return {
        required,
        requiredInput,
        numberRequired,
        conditionalFormRule
    };
}

export default useFormRules;
