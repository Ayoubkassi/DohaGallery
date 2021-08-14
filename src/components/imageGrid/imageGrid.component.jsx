import React from 'react';
import './imageGrid.styles.css';
import { motion } from 'framer-motion';
import useFirestore from '../../hooks/useFirestore';


const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  return (
    <div className="img-grid">
     {docs && docs.map(doc => (
       <motion.div className="img-wrap" key={doc.id}
         layout
         whileHover={{ opacity: 1 }}s
         onClick={() => setSelectedImg(doc.url)}
       >
         <motion.img src={doc.url} alt="uploaded pic"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1 }}
         />
       </motion.div>
     ))}
   </div>
  )
}

export default ImageGrid;
