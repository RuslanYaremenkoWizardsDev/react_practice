import './styles/styles.scss';
import _ from 'lodash';
import Article from './article';

const article = new Article('New Article');

console.log(article.toString() === article);
console.log(_.isArray([1, 2, 3]), 'lodash');
