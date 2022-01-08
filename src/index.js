import _ from 'lodash';

function getComponent() {
  const element = document.createElement('div');
  element.innerHTML = _.join(['test', 'webpack'], ' ');
  return element;
}

const testElement = getComponent();
document.getElementById('test').appendChild(testElement);
