import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {useFormik} from 'formik';
import {
    Label, Col, Button, FormGroup, Card, CardBody, Input
} from 'reactstrap';
import map from 'lodash/map';

const editorConfig = {
    toolbar: [
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'blockQuote',
        'insertTable',
        'undo',
        'redo'
    ]
};

const BackForm = ({
    form, fields, submit, fetch, id, validate
}) => {
    useEffect(() => {
        fetch(id);
    }, [fetch, id]);

    const Formik = useFormik({
        enableReinitialize: true,
        initialValues: {...form},
        validate,
        onSubmit: payload => submit({payload, id})
    });

    return (
        <>
            <Col sm="4" className="mx-auto mt-5 p-0">
                <Card className="form-card">
                    <CardBody>
                        <form
                            key="form"
                            onSubmit={Formik.handleSubmit}
                        >
                            {map(fields, field => (
                                <FormGroup
                                    key={field.id}
                                >
                                    <Col
                                        md={{size: 10, offset: 1}}
                                        className="mb-3 p-0"
                                        tag="h5"
                                    >
                                        <Label
                                            for={field.id}
                                        >
                                            {field.label}
                                        </Label>
                                    </Col>
                                    {field.type !== 'CKEditor'
                                        ? (
                                            <>
                                                <Col
                                                    md={{size: 10, offset: 1}}
                                                    className="mb-3 p-0"
                                                >
                                                    <Input
                                                        className="form-control"
                                                        onChange={Formik.handleChange}
                                                        onBlur={Formik.handleBlur}
                                                        value={Formik.values[field.name]}
                                                        placeholder={field.placeholder}
                                                        type={field.type}
                                                        name={field.name}
                                                        id={field.id}
                                                    />
                                                </Col>
                                                <Col
                                                    md={{size: 10, offset: 1}}
                                                    className="mb-3 p-0"
                                                >
                                                    {Formik.errors[field.name]
                                                && Formik.touched[field.name]
                                                && (
                                                    <p className="error">
                                                        {Formik.errors[field.name]}
                                                    </p>
                                                )}
                                                </Col>
                                            </>
                                        )
                                        : (
                                            <>
                                                <Col
                                                    md={{size: 10, offset: 1}}
                                                    className="mb-3 p-0"
                                                >
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={form[field.name]}
                                                        config={{...editorConfig, placeholder: field.placeholder}}
                                                        onChange={(event, editor) => Formik.setFieldValue(field.name, editor.getData())}
                                                    />
                                                </Col>
                                                <Col
                                                    md={{size: 10, offset: 1}}
                                                    className="mb-3 p-0"
                                                >
                                                    {Formik.errors[field.name]
                                            && Formik.touched[field.name]
                                            && (
                                                <p className="error">
                                                    {Formik.errors[field.name]}
                                                </p>
                                            )}
                                                </Col>
                                            </>
                                        )}
                                </FormGroup>
                            ))}
                            <div className="d-flex justify-content-between">
                                <Col
                                    md={{size: 10, offset: 1}}
                                    className="mt-4 d-flex justify-content-between p-0"
                                >
                                    <Button
                                        type="submit"
                                        color="danger"
                                        className="btn-cancel"
                                    >
                                        Cancelar
                                    </Button>
                                    {' '}
                                    <Button
                                        type="submit"
                                        color="primary"
                                        className="px-4 btn-submit"
                                    >
                                        Enviar
                                    </Button>
                                    {' '}
                                </Col>
                            </div>
                        </form>
                    </CardBody>
                </Card>
            </Col>
        </>
    );
};

export default BackForm;

BackForm.propTypes = {
    form: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
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
    id: PropTypes.shape({id: PropTypes.string}),
    submit: PropTypes.func.isRequired,
    fetch: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired
};

BackForm.defaultProps = {
    id: null
};
