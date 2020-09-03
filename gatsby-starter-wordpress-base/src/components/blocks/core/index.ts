import Paragraph from './paragraph';
import Heading from './heading';
import More from './more';
import { BlockLibraryType } from '../supported'

const library: BlockLibraryType = {
  'core/paragraph': Paragraph,
  'core/heading': Heading,
  'core/more': More
}

export default library;
