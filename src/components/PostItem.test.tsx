import { render, screen, fireEvent } from '@testing-library/react';
import PostItem from './PostItem';
import { Post } from '../types';

const post: Post = { userId: 1, id: 1, title: 'Test Post', body: 'This is a test post body.' };

test('renders PostItem with correct title and body', () => {
  const onClick = jest.fn();
  render(<PostItem post={post} onClick={onClick} />);

  expect(screen.getByText('Test Post')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Test Post'));
  expect(onClick).toHaveBeenCalledWith(post.id);
});