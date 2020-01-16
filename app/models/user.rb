# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_email          (email) UNIQUE
#  index_users_on_session_token  (session_token) UNIQUE
#

class User < ApplicationRecord
  validates :first_name, :last_name, :password_digest, :session_token, presence: true
  validates :email, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :owned_projects,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :Project

  has_many :assigned_tasks,
    foreign_key: :assignee_id,
    class_name: :Task

  has_many :project_memberships,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: :ProjectMembership,
    inverse_of: :member,
    dependent: :destroy

  has_many :projects,
    through: :project_memberships,
    source: :project
    # inverse_of: :members

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
