import { useState } from 'react';

import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/system';
import React from 'react';
// import { Box } from '';
// import { Image } from '@common';

export const ImageUpload: React.FC = () => {
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const formData = new FormData();

  const uploadImage = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
    setName(e.target.value);
    formData.append('file', e.target.files[0]);
  };

  const handleCancel = () => {
    setSelectedFile('');
    setName('');
    formData.delete('file');
  };
  return (
    <Box flexDirection={'column'} gap={1}>
      <Box>
        <form>
          <input type="file" value={name} onChange={(e) => uploadImage(e)} />
        </form>
      </Box>

      {selectedFile && (
        <Box width="100px" height="100px" position={'relative'}>
          <Box>
            {/* <Image height="100px" width="80px" src={selectedFile} /> */}
            <img
              src={selectedFile}
              alt=""
              height="100px"
              width="100px"
              style={{ borderRadius: '8px' }}
            />
          </Box>
          <Box
            height={'25px'}
            width={'25px'}
            zIndex={10}
            position="absolute"
            right={'4px'}
            top={'4px'}
            sx={{ '&:hover': { cursor: 'pointer' } }}
            onClick={handleCancel}
          >
            <CancelIcon />
          </Box>
        </Box>
      )}
    </Box>
  );
};