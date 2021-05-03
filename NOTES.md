I put every component in a separate folder and add an index.ts file where I import and export the component. This makes the path of the import shorter in the parent component.
For example instead of :
import Articles from './Articles/Articles';
I can just write:
import Articles from './Articles';

If there is more than one child component, I like to put them all in one folder "components" to make the folder structure more clear and concise.

I used "IType" naming convention (so just adding I before the type/interface name) to avoid possible name clashes with variables created with @emotion/styled

Despite the fact that it's a small app (it only has one route), I decided to add routing with react-router-dom. I did it because this is a SPA app and when we develop apps we should keep in mind that they will grow over time (for example a checkout, home page, login page, etc would be added in the future)
