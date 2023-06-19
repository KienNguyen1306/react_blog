# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

      <ul className="comments">
        {/* Comment 1 */}
        <li className="item">
          <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src="/assets/images/avatar1.jpg" alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">
                John Smith
              </a>
              <p className="comments__section--time">2 minutes ago</p>
              <p className="comments__section--text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt sequi odit exercitationem maiores, iusto unde
                quibusdam! Ullam nisi iste reprehenderit, expedita nam ad. Nisi
                hic at voluptate sint incidunt aut?
              </p>
              {/* <i class="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
          {/* Reply Comments */}
          <ul className="comments">
            <li className="item">
              <div className="comments__section">
                <div className="comments__section--avatar">
                  <a href="/">
                    <img src="/assets/images/avatar3.jpg" alt="" />
                  </a>
                </div>
                <div className="comments__section--content">
                  <a href="/" className="comments__section--user">
                    John Smith
                  </a>
                  <p className="comments__section--time">2 minutes ago</p>
                  <p className="comments__section--text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit?
                  </p>
                  {/* <i class="ion-reply comments__section--reply"></i> */}
                </div>
              </div>
            </li>
            <li className="item">
              <div className="comments__section">
                <div className="comments__section--avatar">
                  <a href="/">
                    <img src="/assets/images/avatar4.jpg" alt="" />
                  </a>
                </div>
                <div className="comments__section--content">
                  <a href="/" className="comments__section--user">
                    John Smith
                  </a>
                  <p className="comments__section--time">2 minutes ago</p>
                  <p className="comments__section--text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Nesciunt sequi odit exercitationem ma?
                  </p>
                  {/* <i class="ion-reply comments__section--reply"></i> */}
                </div>
              </div>
            </li>
          </ul>
          {/* Reply form */}
          <div className="comments__form">
            <div className="comments__form--control">
              <div className="comments__section--avatar">
                <a href="/">
                  <img src="/assets/images/avatar1.jpg" alt="" />
                </a>
              </div>
              <textarea />
            </div>
            <div className="text-right">
              <button className="btn btn-default">Submit</button>
            </div>
          </div>
        </li>
        {/* Comment 2 */}
        <li className="item">
          <div className="comments__section">
            <div className="comments__section--avatar">
              <a href="/">
                <img src="/assets/images/avatar2.jpg" alt="" />
              </a>
            </div>
            <div className="comments__section--content">
              <a href="/" className="comments__section--user">
                John Smith
              </a>
              <p className="comments__section--time">2 minutes ago</p>
              <p className="comments__section--text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nesciunt sequi odit exercitationem maiores?
              </p>
              {/* <i class="ion-reply comments__section--reply"></i> */}
            </div>
          </div>
          <div className="comments__hidden">
            <a href="/">
              <i className="icons ion-ios-undo" /> Xem thêm 2 câu trả lời
            </a>
          </div>
        </li>
        {/* Comment 3 */}
        <PostDetaiCommentItem />
      </ul>
