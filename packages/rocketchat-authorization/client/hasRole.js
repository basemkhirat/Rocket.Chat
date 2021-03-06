import { Roles } from 'meteor/rocketchat:models';

export const hasRole = (userId, roleNames, scope) => {
	roleNames = [].concat(roleNames);
	return Roles.isUserInRoles(userId, roleNames, scope);
};
