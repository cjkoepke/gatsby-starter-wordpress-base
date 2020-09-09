import { BlockLibraryType } from '../supported';

import Paragraph from './paragraph';
import Heading from './heading';
import More from './more';
import Separator from './separator';
import List from './list';

const library: BlockLibraryType = {
  'core/paragraph': Paragraph,
  'core/heading': Heading,
  'core/more': More,
  'core/separator': Separator,
  'core/list': List
}

export default library;
