import avatar from '/images/avatar.png';

export default function Comment({ title, date, comment }) {
    return (
        <div className='card comment'>
            <div className="card-body comment__body">
                <div className="comment__aside">
                    <div className="comment__image">
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>

                <div className="comment__content">
                    <div className="comment__meta">
                        <h5 className='comment__title'>
                            {title}
                        </h5>

                        <ul className="list-meta">
                            <li>
                                <i className="material-icons">calendar_today</i>

                                {
                                    <span>
                                        {(new Date(date)).toLocaleDateString('en-US', 'short')}
                                    </span>
                                }
                            </li>

                            <li>
                                <i className="material-icons">access_time</i>

                                {
                                    <span>
                                        {(new Date(date)).toLocaleTimeString('en-US', 'short')}
                                    </span>
                                }
                            </li>
                        </ul>
                    </div>

                    <div className="comment__description">
                        {comment}
                    </div>
                </div>
            </div>
        </div>
    );
}