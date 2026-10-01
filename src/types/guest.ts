export type Guest = {
  /** Lowercase letters, numbers, and hyphens. Used in the URL. */
  slug: string;
  /**
   * Written exactly as you want to address this person.
   * The invitation says "Dear {name}".
   */
  name: string;
  /**
   * For your own notes: Uncle, Aunt, Friend, Cousin, Colleague, Family Friend.
   * This is not shown on the invitation.
   */
  relationship: string;
  /** The personal line shown to this guest. */
  message: string;
};
