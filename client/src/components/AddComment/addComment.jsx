import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useCreateComment, useGetAllComments } from "../../hooks/useComments";
import { useParams, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

const addCommentSchema = Yup.object().shape({
    title: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    comment: Yup.string()
        .min(10, 'Too Short!')
        .max(500, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required')
});


export default function AddComment() {
    const navigate = useNavigate();
    const { postId } = useParams();
    const { userId } = useAuthContext();
    const createComment = useCreateComment();
    const [, dispatch] = useGetAllComments(postId);

    return (
        <>
            <div className='comment-create card'>
                <div className="comment__head card-header">
                    <h3 className="comment__title card-title">
                        Leave a reply
                    </h3>
                </div>

                <div className="comment__body card-body">
                    <Formik
                        initialValues={{
                            title: '',
                            comment: '',
                            email: '',
                            userId,
                            postId
                        }}
                        validationSchema={addCommentSchema}

                        onSubmit={(values, { resetForm }) => {
                            try {
                                createComment(postId, values).then((newComment) => {
                                    dispatch({ type: 'ADD_COMMENT', payload: { ...newComment, author: { email } } });
                                    resetForm();
                                });
                            } catch (error) {
                                console.log(error);
                            }
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className='comment'>
                                <div className="from-group">
                                    <Field className="form-control" id="title" placeholder="Your Title" name="title" required />

                                    {errors.title && touched.title ? (
                                        <div className="invalid-feedback">{errors.title}</div>
                                    ) : null}
                                </div>

                                <div className="from-group">
                                    <Field type="email" name="email" placeholder='Email address' id="email" className='form-control' />
                                    {errors.email && touched.email ? (
                                        <div className='invalid-feedback'>{errors.email}</div>
                                    ) : null}
                                </div>

                                <div className="form-group">
                                    <Field component='textarea' className="form-control" id="comment" name='comment' placeholder='Comment' rows="3" required />
                                    {errors.description && touched.description ? (
                                        <div className='invalid-feedback'>{errors.description}</div>
                                    ) : null}
                                </div>

                                <button type="submit" disabled={Object.keys(errors).length} className="btn btn-primary btn-sm">Send Reply</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}