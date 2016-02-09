FactoryGirl.define do
  factory :player do
    sequence(:username) { |n| "test#{n}"}
  end
end
