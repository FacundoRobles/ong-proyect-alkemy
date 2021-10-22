import React from 'react';
import {PropTypes} from 'prop-types';
import BackForm from '../../components/BackForm';

const Component = ({
    form, fields, submitCategoryRequested, fetchCategoryRequested, match
}) => {
    const validate = values => {
        const errors = {};
        if (!values.name || !values.description) {
            errors.name = 'Todos los campos requeridos';
            errors.description = 'Todos los campos requeridos';
        }
        return errors;
    };

    return (
        <>
            <h1 className="text-center mb-4">Administrar Categorias</h1>
            <BackForm
                key="CategoryForm"
                form={form}
                fields={fields}
                submit={submitCategoryRequested}
                fetch={fetchCategoryRequested}
                id={match.params.id}
                validate={validate}
            />
        </>
    );
};

export default Component;

Component.propTypes = {
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired

        }).isRequired
    ).isRequired,
    submitCategoryRequested: PropTypes.func.isRequired,
    fetchCategoryRequested: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string
        })
    })
};

Component.defaultProps = {
    match: {}
};
