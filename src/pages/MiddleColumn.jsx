import React, { useState, useEffect } from 'react';
import newsfeeddata from '../utility/newsfeeddata'; // Ensure this has the correct profile and author info
import { FiSettings, FiShare } from 'react-icons/fi';
import { TbHeart } from 'react-icons/tb';

const MiddleColumn = () => {
  // Load initial data from localStorage, or fall back to initialNewsfeed
  const loadInitialNewsfeed = () => {
    const savedNewsFeed = localStorage.getItem('newsFeedState');
    if (savedNewsFeed) {
      return JSON.parse(savedNewsFeed);
    }
    return newsfeeddata.news.map((newsItem, index) => ({
      ...newsItem,
      id: index + 1, // Ensure each news item has a unique ID
      comments: [],
      favorites: 0,
      isFavorited: false,
    }));
  };

  const [newsFeedState, setNewsFeedState] = useState(loadInitialNewsfeed);
  const [newPost, setNewPost] = useState('');
  const [expandedStories, setExpandedStories] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showComments, setShowComments] = useState(false);

  // Filter options
  const filterOptions = ['All', 'Favorites', 'Comments'];

  // Save newsFeedState to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('newsFeedState', JSON.stringify(newsFeedState));
  }, [newsFeedState]);

  const toggleExpandStory = (id) => {
    setExpandedStories((prevExpandedStories) => ({
      ...prevExpandedStories,
      [id]: !prevExpandedStories[id],
    }));
  };

  const handleAddComment = (id, comment) => {
    if (comment.trim()) {
      setNewsFeedState((prevState) =>
        prevState.map((newsItem) => {
          if (newsItem.id === id) {
            return {
              ...newsItem,
              comments: [...newsItem.comments, comment],
            };
          }
          return newsItem;
        })
      );
    }
  };

  const toggleFavorite = (id) => {
    setNewsFeedState((prevState) =>
      prevState.map((newsItem) => {
        if (newsItem.id === id) {
          return {
            ...newsItem,
            isFavorited: !newsItem.isFavorited,
            favorites: newsItem.isFavorited ? newsItem.favorites - 1 : newsItem.favorites + 1,
          };
        }
        return newsItem;
      })
    );
  };

  const calculateDaysAgo = (postDate) => {
    const currentDate = new Date();
    const postedDate = new Date(postDate);
    const timeDiff = currentDate - postedDate;
    return Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
  };

  const handlePostStory = () => {
    if (newPost.trim().length < 3) {
      alert('Story must be at least 3 characters long.');
      return;
    }

    const newStory = {
      id: newsFeedState.length + 1, // Unique ID for new story
      description: newPost,
      dateandtime: {
        date: new Date().toISOString().split('T')[0],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
      editdate: { status: false, date: new Date().toISOString().split('T')[0] },
      eventregistered: false,
      comments: [],
      favorites: 0,
      isFavorited: false,
    };

    setNewsFeedState((prevState) => [newStory, ...prevState]);
    setNewPost('');
  };

  const handleShare = (newsItem) => {
    const textToCopy = `${newsItem.author} shared: "${newsItem.description}". Read more at ${window.location.href}`;

    navigator.clipboard.writeText(textToCopy).then(() => {
      alert('News shared successfully! Copied to clipboard.');
    }).catch((err) => {
      console.error('Failed to copy: ', err);
    });
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setIsDropdownOpen(false);
  };

  const filteredNewsFeed = newsFeedState.filter((newsItem) => {
    if (selectedFilter === 'Favorites') {
      return newsItem.isFavorited;
    }
    if (selectedFilter === 'Comments') {
      return newsItem.comments.length > 0;
    }
    return true; // 'All' case
  });

  return (
    <div className='mt-4'>
      <div className='flex items-center gap-2'>
        <input
          type="text"
          placeholder="John Doe Shared Some Progress"
          className='w-full p-2 border rounded-md'
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button
          className='bg-blue-500 text-white px-4 py-2 rounded-md'
          onClick={handlePostStory}
        >
          Post
        </button>
      </div>

      {/* Story Filter Button */}
      <div className='relative mt-4 text-right'>
        <button
          className='text-blue-500'
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Story Filter
        </button>
        {isDropdownOpen && (
          <div className='absolute right-0 mt-1 w-40 bg-white border rounded-md shadow-lg'>
            {filterOptions.map((option) => (
              <div
                key={option}
                className='px-4 py-2 cursor-pointer hover:bg-gray-200'
                onClick={() => handleFilterSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <h1 className='font-bold text-xl mt-6'>NEWSFEED</h1>
      <hr className='my-4' />

      {filteredNewsFeed.map((newsItem) => {
        const isExpanded = expandedStories[newsItem.id];
        const truncatedDescription = newsItem.description.slice(0, Math.floor(newsItem.description.length * 0.5));
        const daysAgo = calculateDaysAgo(newsItem.dateandtime.date);

        return (
          <div key={newsItem.id} className='border p-4 rounded-lg mb-4'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-2'>
                <img src={newsfeeddata.profilepic} alt="profile" className='w-10 h-10 rounded-full' />
                <div>
                  <p className='font-semibold'>{newsfeeddata.author}</p>
                  <p className='text-sm text-gray-500'>Posted at {newsItem.dateandtime.time} on {newsItem.dateandtime.date}</p>
                  <span className='text-xs text-green-500'>{newsItem.eventregistered ? "Event Register" : "Update"}</span>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <p className='text-sm text-gray-500'>{newsItem.editdate.status ? "Edited" : "Posted"} {daysAgo} days ago</p>
                <FiSettings className='cursor-pointer' />
              </div>
            </div>

            <p className='mt-2'>
              {isExpanded ? newsItem.description : `${truncatedDescription}...`}
            </p>

            <div className='flex justify-center items-center mt-4'>
              <button
                className='bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer'
                onClick={() => toggleExpandStory(newsItem.id)}
              >
                {isExpanded ? 'Collapse Story' : 'Expand Story'}
              </button>
            </div>

            <div className='flex justify-between items-center mt-4'>
              <div className='flex items-center'>
                <TbHeart
                  size={25}
                  className={`cursor-pointer ${newsItem.isFavorited ? 'text-red-500' : ''}`}
                  onClick={() => toggleFavorite(newsItem.id)}
                />
                <p className='ml-2'>{newsItem.favorites} Likes</p>
              </div>
              <div className='flex items-center gap-2'>
                <p className='cursor-pointer hover:text-blue-500' onClick={() => setShowComments(!showComments)}>{newsItem.comments.length} Comments</p>
                <button
                  className='flex items-center gap-1 text-blue-500'
                  onClick={() => handleShare(newsItem)}
                >
                  <FiShare className="text-xl" />
                  Share
                </button>
              </div>
            </div>

            <hr className='my-4' />

            <div className={` mb-4 ${showComments ? "block" : "hidden"} cursor-pointer`} >
              {newsItem.comments.map((comment, commentIndex) => (
                <div key={commentIndex} className='flex items-center gap-2'>
                  <img src={newsfeeddata.profilepic} alt="profile" className='w-10 h-10 rounded-full' />
                  <div className=''>
                    <p className='font-semibold'>{newsfeeddata.author}</p>
                    <p className='rounded-md '>{comment}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className='flex items-center gap-2'>
              <img src={newsfeeddata.profilepic} alt="profile" className='w-8 h-8 rounded-full' />
              <input
                type="text"
                placeholder="Add a comment..."
                className='w-full p-2 border rounded-md'
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleAddComment(newsItem.id, e.target.value);
                    e.target.value = ''; // Clear input after adding comment
                  }
                }}
              />
              <button className='bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer' onClick={(e) => {
                const input = e.target.previousSibling;
                handleAddComment(newsItem.id, input.value);
                input.value = '';
              }}>Post</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MiddleColumn;
