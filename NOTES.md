I put every component in a separate folder and add an index.ts file where I import and export the component. This makes the path of the import shorter in the parent component.
For example instead of :
import Articles from './Articles/Articles';
I can just write:
import Articles from './Articles';

If there is more than one child component, I like to put them all in one folder "components" to make the folder structure more clear and concise.

I used "IType" naming convention (so just adding I before the type/interface name) to avoid possible name clashes with variables created with @emotion/styled

