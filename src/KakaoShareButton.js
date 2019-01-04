import PropTypes from 'prop-types';

import assert from 'assert';

import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function kakaoLink(url, { title, image }) {
  assert(url, 'kakao.url');
  assert(image, 'kakao.image');

  return 'https://story.kakao.com/s/share?' + objectToGetParams({
    url,
    text: title,
    pic: image,
  });
}

const KakaoShareButton = createShareButton('kakao', kakaoLink, props => ({
  title: props.title,
  image: props.image,
}), {
  title: PropTypes.string,
  image: PropTypes.string,
}, {
  windowWidth: 550,
  windowHeight: 400,
});

export default KakaoShareButton;
