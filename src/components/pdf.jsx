import React from 'react'

    const DownloadButton = () => {
        const handleDownload = () => {
          const pdfUrl = '/my-portfolio/src/assets/h.pdf';
          const link = document.createElement('a');
          link.href = pdfUrl;
          link.download = 'h.pdf'; // Nom du fichier téléchargé
          link.click();
        };
  return (
    <div>
          <button className=' dark:text-gray-700 bg-pink-300 rounded-full cursor-pointer hover:shadow-xl hover:shadow-neutral-600 border-gray-200 px-3 py-1 mt-3 ml-12 hover:translate-y-1 duration-150 text-gray-500' onClick={handleDownload}>Télécharger le PDF</button>
        
    </div>
  )
}

export default DownloadButton
