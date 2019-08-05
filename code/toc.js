import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { CamelToTitle } from "./utils";
/**
 * The toc component
 */
const TOC = ({sections, _pages, _ID, _relativeURL}) => {
    const SentenceCase = (text) => text.charAt(0).toUpperCase() + text.slice(1);

    function insertAndShift(arr, from, to) {
        let cutOut = arr.splice(from, 1) [0]; // cut the element at index 'from'
        arr.splice(to, 0, cutOut);            // insert it at index 'to'
    }
    let lengthSections = sections.length
    for(let i=0;i<lengthSections;i++){
        let indexElement = sections[i]
        if(indexElement == 'index'){
            let position = sections.indexOf(indexElement)
            if(position !== 0){
                insertAndShift(sections, position, 0 )
            }
        }
    }

    return (
        <div className='tocWrapper'>
        <div className="toc">
            <div className="tocLogo">
            <a href="https://uk.sustainabilitytool.com/"><img className="tocLogoImg" src="../assets/images/logo.png"/></a>

                {/* <input className="tocLogoSearch" type="text" placeholder="Search.."/> */}
        </div>

            {

                sections.map((section, i) => {
                    // console.log('Sections', sections)
                    let page = _pages[section];
                    
                    return (
                        <nav key={i}
                             className={`toc__section toc__section--${i}${page._url === _pages[_ID]._url ? ' toc__section--active' : ''}`}>
                            <h2 className='toc__section__headline'><a
                                href={`${_relativeURL(page._url, _ID)}/`}>{page.title}</a></h2>

                            <ul>
                                {page.docs?
                                    page.docs.map((partial, i) => {
                                        const sectionNameTOC = partial.replace('.md', '').replace(/[0-9]/g, '').replace(/_/g, '-').replace(' ', '-');
                                        const sectionName = partial.replace('.md', '').replace(/[0-9]/g, '').replace(/_/g, '-').replace(/ /g, '-').replace(/\|/g, '').toLowerCase();
                                        return (
                                            <li key={i}>
                                                <a href={`${_relativeURL(page._url, _ID)}/#${sectionName}`}>{CamelToTitle(sectionNameTOC.replace(/-/g, ' '))}</a>
                                            </li>
                                        );
                                    }): null
                                }
                            </ul>
                        </nav>
                    )
                })
            }
        </div>
        </div>

    );
}

TOC.propTypes = {
    /**
     * sections:
     *   - page1
     *   - page2
     *   - page2/nested
     */
    sections: PropTypes.node.isRequired,
};

TOC.defaultProps = {};

export default TOC;
