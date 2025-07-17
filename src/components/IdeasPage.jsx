import React, { useState, useEffect } from 'react';
import IdeasCard from './IdeasCard';
import Pagination from './Pagination';
import Navbar from './Navbar';
import Header from './header';

const bannerImage =
  'https://www.colliers.com/-/media/images/colliers/asia/philippines/colliers-review/collierreview_hero_image_01312022_v2/hero_image_tondominium/hero_image_021522/hero_image_colliersviewpoint_022222.ashx?bid=0f5b3ed2a8de41f89e1a8d557e48f9f8';

const mockData = Array.from({ length: 100 }, (_, i) => ({
  image: 'https://via.placeholder.com/400x300',
  date: `2022-09-${String(30 - (i % 30)).padStart(2, '0')}`,
  title: `Kenali Tingkatan Influencers berdasarkan Jumlah Followers ke-${i + 1}`,
}));

const IdeasPage = () => {
  const initialSort = localStorage.getItem('ideas-sort') || 'newest';
  const initialPerPage = parseInt(localStorage.getItem('ideas-per-page')) || 10;
  const initialPage = parseInt(localStorage.getItem('ideas-page')) || 1;

  const [sortOrder, setSortOrder] = useState(initialSort);
  const [perPage, setPerPage] = useState(initialPerPage);
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    localStorage.setItem('ideas-sort', sortOrder);
    localStorage.setItem('ideas-per-page', perPage.toString());
    localStorage.setItem('ideas-page', currentPage.toString());
  }, [sortOrder, perPage, currentPage]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bg = document.querySelector('.header-bg');
      if (bg) {
        bg.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sortedData = [...mockData].sort((a, b) => {
    return sortOrder === 'newest'
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  const totalPages = Math.ceil(sortedData.length / perPage);
  const currentItems = sortedData.slice((currentPage - 1) * perPage, currentPage * perPage);

  return (
    <>
      <Header imageUrl={bannerImage} />

      <div className="container">
        <div className="controls">
          <span>
            Showing {(currentPage - 1) * perPage + 1} - {Math.min(currentPage * perPage, sortedData.length)} of {sortedData.length}
          </span>
          <div>
            <select value={perPage} onChange={(e) => {
              setPerPage(parseInt(e.target.value));
              setCurrentPage(1);
            }}>
              {[10, 20, 50].map(n => (
                <option key={n} value={n}>Show per page: {n}</option>
              ))}
            </select>

            <select value={sortOrder} onChange={(e) => {
              setSortOrder(e.target.value);
              setCurrentPage(1);
            }}>
              <option value="newest">Sort by: Newest</option>
              <option value="oldest">Sort by: Oldest</option>
            </select>
          </div>
        </div>

        <div className="grid">
          {currentItems.map((item, idx) => (
            <IdeasCard key={idx} {...item} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default IdeasPage;
