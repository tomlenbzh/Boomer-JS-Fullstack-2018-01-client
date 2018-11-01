import React from 'react';

const UsersTopScores = () => {
  return (
    <div className="Top-Scores section">
      <ul className="collection with-header">
        <li className="collection-header center">
          <h4 className="goldText customTitleHeight">Top scores</h4>
        </li>
        <li className="collection-item">
          <div>
            <span className="goldText">1</span>. User 1
            <span className="right">
              {' '}
              100000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <span className="goldText">2</span>. User 2
            <span className="right">
              {' '}
              90 000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <span className="goldText">3</span>. User 3
            <span className="right">
              {' '}
              60 000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <span className="goldText">4</span>. User 4
            <span className="right">
              {' '}
              20 000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>
        <li className="collection-item">
          <div>
            <span className="goldText">5</span>. User 5
            <span className="right">
              {' '}
              17 000
              <i className="material-icons right goldText">star_border</i>
            </span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UsersTopScores;
