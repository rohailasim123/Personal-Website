import {NextPage} from 'next';

import About from '../components/About';
import PublicationList from '../components/PublicationList';
import Teaching from '../components/Teaching';
import Education from '../components/Education';
import MediaCoveragePreview from '../components/MediaCov';

const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <MediaCoveragePreview />
        <PublicationList/>
        {/* <Teaching/>
        <Education/> */}
    </>
);

export default Index;
