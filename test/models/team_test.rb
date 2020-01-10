# == Schema Information
#
# Table name: teams
#
#  id          :bigint           not null, primary key
#  description :text             default(""), not null
#  title       :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
# Indexes
#
#  index_teams_on_title  (title) UNIQUE
#

require 'test_helper'

class TeamTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
