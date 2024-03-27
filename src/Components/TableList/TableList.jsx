/* eslint-disable no-underscore-dangle */
import React from 'react';
import './tableList.scss';

// mui table
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// Random image URLs for news articles
const newsImages = [
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://media.istockphoto.com/id/1026461504/photo/newspaper-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=wZVYv90iovvuiKGPhqHAERpkQZ2k670N_PDK8X67Kpc=',
  'https://media.istockphoto.com/id/1026461458/photo/newspaper-isolated-on-white-background.jpg?s=612x612&w=is&k=20&c=KXhlk2sTw5SotAqy7Da--ho1oYYwGvZe30IdLLuGpQ8=',
  'https://media.istockphoto.com/id/972003890/photo/newspaper.jpg?s=612x612&w=is&k=20&c=oh0HmQF-hiPQi5z9v2mQ2QPxsYX-ScTdkV689k1_nfs=',
  'https://media.istockphoto.com/id/612403980/photo/financial-forecasts-on-the-stock-exchanges.jpg?s=612x612&w=is&k=20&c=6cezjsoqY0YXkNHwOYJ3YwpL5AdrB3sfFPRFW_-Lvpw=',
];

function TableList() {
  // Replace this data with your own
  const data = [
    {
      _id: 23423343,
      title: 'Breaking News: Major Development in Technology Sector',
      image: newsImages[0],
      author: 'John Doe',
      date: '3 October, 2022',
      category: 'Technology',
      status: 'Published',
    },
    {
      _id: 235343343,
      title: 'Health Alert: New Study Reveals Benefits of Yoga',
      image: newsImages[1],
      author: 'Jane Smith',
      date: '23 April, 2022',
      category: 'Health',
      status: 'Draft',
    },
    {
      _id: 98765432,
      title: 'Science Breakthrough: AI Achieves Human-Level Performance',
      image: newsImages[2],
      author: 'David Johnson',
      date: '15 September, 2022',
      category: 'Science',
      status: 'Published',
    },
    {
      _id: 45678901,
      title: 'Business News: Market Trends and Predictions for 2023',
      image: newsImages[3],
      author: 'Emily Jones',
      date: '8 June, 2022',
      category: 'Business',
      status: 'Published',
    },
    {
      _id: 12345678,
      title: 'Entertainment Buzz: Latest Movies and Celebrity Gossip',
      image: newsImages[4],
      author: 'Michael Brown',
      date: '27 November, 2022',
      category: 'Entertainment',
      status: 'Draft',
    },
    // Add more news articles as needed
  ];

  return (
    <TableContainer component={Paper} className='table_list'>
      <Table sx={{ minWidth: 650 }} aria-label='news table'>
        <TableHead>
          <TableRow>
            <TableCell className='table_cell'>Article ID</TableCell>
            <TableCell className='table_cell'>Title</TableCell>
            <TableCell className='table_cell'>Author</TableCell>
            <TableCell className='table_cell'>Category</TableCell>
            <TableCell className='table_cell'>Date</TableCell>
            <TableCell className='table_cell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell component='th' scope='row' className='table_cell'>
                <div className='news_article'>
                  <img src={row.image} alt='news' className='news_image' />
                  {row._id}
                </div>
              </TableCell>
              <TableCell className='table_cell'>{row.title}</TableCell>
              <TableCell className='table_cell'>{row.author}</TableCell>
              <TableCell className='table_cell'>{row.category}</TableCell>
              <TableCell className='table_cell'>{row.date}</TableCell>
              <TableCell className='table_cell'>
                <span className={`status ${row.status.toLowerCase()}`}>
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableList;
