import profile from "./profile.json";

export type ProfileSectionsType = keyof typeof profile;
export type ProjectsType = (typeof profile)["projects"][0];
export type ExperienceType = (typeof profile)["experience"][0];

function getProfileData<
  T extends ProfileSectionsType,
  R = T extends "projects" ? ProjectsType : ExperienceType,
>(section: T): R[] {
  return profile[section] as R[];
}

export { getProfileData };
