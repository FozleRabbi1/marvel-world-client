import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const AllTabs = () => {
    return (
        <div className='my-10 px-10'>

            <Tabs>
                <TabList>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                    <Tab>Title 3</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo officiis aut illum ullam. Perferendis accusamus eius fuga nesciunt sint magni!</p>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ipsa fuga excepturi, error debitis perspiciatis sit, itaque perferendis nobis possimus veritatis quos quaerat voluptatum totam eos aperiam minima iusto exercitationem?</p>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero necessitatibus esse atque eligendi quaerat, soluta ea labore? Ex molestias ducimus aut, sed quia cum voluptatum sunt aliquid exercitationem eius eaque harum nulla quidem consectetur perferendis repellendus excepturi blanditiis! Hic nisi deleniti reprehenderit quis incidunt perspiciatis cupiditate necessitatibus asperiores vero quam.</p>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default AllTabs;