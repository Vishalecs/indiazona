import React, { useState } from 'react';
import '../styles/Body.css';

const Body = ({ selectedOption }) => {
  const [tableData, setTableData] = useState([
    
        {
          sno: 1,
          categoryName: 'Automotive - Car Parts',
          subCategoryName: 'Automotive - Car Parts',
        },
        {
          sno: 2,
          categoryName: 'Automotive - Cleaning Kits (Brush)',
          subCategoryName: 'Automotive - Cleaning Kits (Brush)',
        },
        {
          sno: 3,
          categoryName: 'Automotive - Accessories (Seat Covers)',
          subCategoryName: 'Automotive - Accessories (Seat Covers)',
        },
        {
          sno: 4,
          categoryName: 'Baby Safety - Guards',
          subCategoryName: 'Baby Safety - Guards',
        },
        {
          sno: 5,
          categoryName: 'Electronic Accessories (Electronics)',
          subCategoryName: 'Electronic Accessories (Electronics)',
        },
        {
          sno: 6,
          categoryName: 'Kitchen Appliances - Blenders',
          subCategoryName: 'Kitchen Appliances - Blenders',
        },
        {
          sno: 7,
          categoryName: 'Home Decor - Curtains',
          subCategoryName: 'Home Decor - Curtains',
        },
        {
          sno: 8,
          categoryName: 'Sports - Gym Equipment',
          subCategoryName: 'Sports - Gym Equipment',
        },
        {
          sno: 9,
          categoryName: 'Fashion - Women Clothing',
          subCategoryName: 'Fashion - Women Clothing',
        },
        {
          sno: 10,
          categoryName: 'Health - Vitamins & Supplements',
          subCategoryName: 'Health - Vitamins & Supplements',
        },
        {
          sno: 11,
          categoryName: 'Books - Fiction',
          subCategoryName: 'Books - Fiction',
        },
        {
          sno: 12,
          categoryName: 'Toys - Educational Toys',
          subCategoryName: 'Toys - Educational Toys',
        },
        {
          sno: 13,
          categoryName: 'Gardening - Tools',
          subCategoryName: 'Gardening - Tools',
        },
        {
          sno: 14,
          categoryName: 'Travel - Luggage & Bags',
          subCategoryName: 'Travel - Luggage & Bags',
        }
      
      
    // Add more rows as needed
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [newItem, setNewItem] = useState({
    categoryName: '',
    subCategoryName: '',
  });

  // Function to handle editing
  const handleEdit = (row) => {
    setEditRow(row);
    setEditModalOpen(true);
  };

  const handleEditSave = () => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.sno === editRow.sno ? { ...editRow } : row
      )
    );
    setEditModalOpen(false);
  };

  const handleDelete = (sno) => {
    setTableData((prevData) => prevData.filter((row) => row.sno !== sno));
  };

  // Function to handle search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Function to handle adding new item
  const handleAddNewItem = () => {
    setTableData((prevData) => [
      ...prevData,
      {
        sno: prevData.length + 1,
        categoryName: newItem.categoryName,
        subCategoryName: newItem.subCategoryName,
      },
    ]);
    setAddModalOpen(false);
    setNewItem({
      categoryName: '',
      subCategoryName: '',
    });
  };

  // Filter table data based on search query
  const filteredData = tableData.filter((row) =>
    row.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    row.subCategoryName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const content = selectedOption ? (
    <>
      <h2>{` ${selectedOption}`}</h2>
      {selectedOption === 'Sub-categories' ? (
        <>
          <div className="search-add-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            <button
              className="add-new-btn"
              onClick={() => setAddModalOpen(true)}
            >
               +  Add New Item
            </button>
          </div>

          <table className="custom-table">
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Category Name</th>
                <th>Sub-category Name</th>
                <th>Option</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row) => (
                <tr key={row.sno}>
                  <td>{row.sno}</td>
                  <td>{row.categoryName}</td>
                  <td>{row.subCategoryName}</td>
                  <td>
  {/* Edit Icon */}
  <img
    src="../image/edit.png"
    alt="Edit"
    width="28"
    height="25"
    margin-right="2px"
    className="edit-icon"
    onClick={() => handleEdit(row)}
    style={{ cursor: 'pointer' }}  // Adding pointer cursor for better UX
  />
  
  {/* Delete Icon */}
  <img
    src="../image/delete.png"
    alt="Delete"
    width="28"
    height="25"
    className="delete-icon"
    onClick={() => handleDelete(row.sno)}
    style={{ cursor: 'pointer' }}  // Adding pointer cursor for better UX
  />
</td>

                </tr>
              ))}
            </tbody>
          </table>

          {/* Edit Modal */}
          {isEditModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>Edit Sub-category</h3>
                <label>
                  Category Name:
                  <input
                    type="text"
                    value={editRow.categoryName}
                    onChange={(e) =>
                      setEditRow({ ...editRow, categoryName: e.target.value })
                    }
                  />
                </label>
                <label>
                  Sub-category Name:
                  <input
                    type="text"
                    value={editRow.subCategoryName}
                    onChange={(e) =>
                      setEditRow({
                        ...editRow,
                        subCategoryName: e.target.value,
                      })
                    }
                  />
                </label>
                <div className="modal-actions">
                  <button onClick={handleEditSave} className="save-btn">
                    Save
                  </button>
                  <button
                    onClick={() => setEditModalOpen(false)}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Add New Item Modal */}
          {isAddModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h3>Add New Sub-category</h3>
                <label>
                  Category Name:
                  <input
                    type="text"
                    value={newItem.categoryName}
                    onChange={(e) =>
                      setNewItem({ ...newItem, categoryName: e.target.value })
                    }
                  />
                </label>
                <label>
                  Sub-category Name:
                  <input
                    type="text"
                    value={newItem.subCategoryName}
                    onChange={(e) =>
                      setNewItem({
                        ...newItem,
                        subCategoryName: e.target.value,
                      })
                    }
                  />
                </label>
                <div className="modal-actions">
                  <button onClick={handleAddNewItem} className="save-btn">
                    Add
                  </button>
                  <button
                    onClick={() => setAddModalOpen(false)}
                    className="cancel-btn"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Details for {selectedOption} are not available yet.</p>
      )}
    </>
  ) : (
    <h2>Select an option to view details</h2>
  );

  return <div className="body-container">{content}</div>;
};

export default Body;
