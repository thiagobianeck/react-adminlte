import React from 'react';

 const StatTile = (props) => {

   let {
     theme = 'bg-yellow',
     icon = 'ion-person-add',
     subject = 'Default Subject',
     stats = '0',
     link = '/default/link',
     width = 3 } = props;

   if(link) {
     link =
         <a href={link} className="small-box-footer">
           Mais info <i className="fa fa-arrow-circle-right"></i>
         </a>;
   }

   if(stats.indexOf('%') !== -1) {
     let style = {
       fontSize: '20px'
     };

     stats = <h3>{stats.replace(/%/g, '')}<sup style={style}>%</sup></h3>;
   } else {
     stats = <h3> {stats} </h3>;
   }

   console.log('props', { theme, icon, subject, stats, link, width });


  return (
      <div className="col-lg-3 col-xs-6">
        <div className={`small-box ${theme}`}>
          <div className="inner">
            {stats}
            <p>{subject}</p>
          </div>
          <div className="icon">
            <i className={`ion ${icon}`}></i>
          </div>
          {link}
        </div>
      </div>
  )
};

export default StatTile;
