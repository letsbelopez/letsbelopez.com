import Layout from '../../components/layout'
import Markdown from 'react-markdown'

const blogPost = () => (
  <Layout 
    title='Creating a Map with Google Cartographer - David Lopez'>
    <Markdown source={`
Before you begin this, you'll need a PC with a newer version of Ubuntu installed. 
You should have all the sensors you need to make a map. At the minimum, you 
have a laser scanner. I used a Velodyne VLP-16 and Ubuntu 16.04 to make a 2D map. 
A 2d map is more than good enough for a wheeled indoor robot.

This was my first robot programming project, and I'd like to
share what I learned.

My boss, the CTO of the company, comes to me at the end of November 
and says, "I need you to make a map using LiDAR, SLAM. Chekout Robot Operating 
System, AHRS, Google Cartographer, Gmapping. By the way, here're some more keywords 
just in case ... IMU, Odometry. Ok good luck."

Without knowing anything he just said, I turned to him and asked, "When is the deadline 
for this?" He responds by saying "The end of December." That gives me about 30 days 
to figure all this out. No problem.

Now that you know the backstory, let's get to business.

Install ROS full desktop version because you'll need the extra tools like rviz, 
and you'll like gazebo for the intro turtlebot tutorials. This may take awhile 
so you  can start doing this now. I installed ROS using apt-get. Didn't bother 
building from source.

Even though I only had a month to do this project, I'm glad that I went 
over the fundamentals of learning Robot Operating System (ROS). You 
should do this too. Definitely know the concepts of launch files, nodes, 
topics and messages in ROS.

Learn how to debug in ROS. This will help you solve problems in the near future. 
Learn rostopic, rqt_graph, tf view frames, rosnode, tf echo.

For example when I was making my map, I wanted to make sure that my laser data was being published and 
subscribed to. I would use rostopic echo <typeLaserScanTopicHere> to make sure that my laser scan data 
was being published. Then I would use rostopic info <type_laser_scan_topic_here> to confirm that google cartographer 
was subscribing to my laser scan data. Learn to debug in ROS. Even if you spend a whole week learning the ROS 
fundamentals and how to debug, it'll make programming with ROS in the future far less painless.

After you have a good idea of the ROS basics, go ahead and learn how to use catkin workspaces. This was the hardest part for me. 
I found that editing and rebuilding workspaces to be a pain in the ass. There are so many different settings and ways to build a 
workspace that it will be overly confusing in the beginning. I ended up spreading out my ROS packages over several different workspaces 
to make this less of a headache. For example, I recommend installing cartographer in its own stand alone workspace, because it has different 
build instructions than other workspaces. If you have time to take the catkin workspace tutorials do them.

Next step is to install cartographer_ros, the google cartographer package for ROS. This could take some time. 
I would recommend to download their 2d example bag file and get it to work, so you're confident that cartographer is running smoothly on 
your machine.

A bag file is a recording of a ROS system. In this bag file someone recorded the data being recorded to make a map. Imagine a guy walking 
around an indoor area with a backpack. The backpack has sensors on it like a Laser Scanner that's running and connected to ROS. The laser scanner 
data is being broadcast on a ROS topic. Someone used the rosbag record program to record all the topics and data running on the system at the time 
this person was walking around with the backpack. When you replay this bag file, the system doesn't know the difference between live data and a recording. 
So when you start playing this bag file while cartographer_ros is running, the SLAM system in cartographer_ros thinks that you're walking around with the 
backpack on. This makes it easier to test cartographer because you can re-run the same data over and over again without having to walk around anymore. You 
can also share it with anyone else.

After you're statisfied that cartographer_ros is creating a map with their demo launch files, it's time to make your own. 

First step is to create your own bag file with laser scan data. Connect your computer to the laser scanner and confirm you're getting data by 
echoing the laser scan data rostopic echo <your_laser_scan_topic>.

Now start recording a bag file: rosbag record -a. -a option will record all topics being published.

I suggest taking your laser scanner on a semi large loop to get cartographer_ros to do a loop closure. And I also recommend recording for at least 
10 minutes because you'll want time on the bag file to debug and it'll be a pain in the ass to have to keep playing it again if it's too short.


    `}/>
  </Layout>
)

export default blogPost