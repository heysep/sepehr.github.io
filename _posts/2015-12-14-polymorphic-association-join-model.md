---
layout: post
title: The Good, The Bad, and The Ugly: Active Record Polymorphic Association with a Join Model
---
For our final project at The Iron Yard Academy my two team partners and I have been building an app called abstract. abstract is a community for makers – primarily visual artists. It is a place to seek inspiration and feedback from other creatives and friends. 

One of the features we wanted to have is tagging. 

## Here are the User Stories:

```
As a user I'd like to be able to tag my profile with words and phrases.
As a user I'd like to be able to tag any posts I create with words and phrases.
As a user I'd like to tag any discussions I create with words and phrases.
As a user I'd like to see all the things that have a specific tag.
```

There are at least three approaches to the requirements above. 

1. Ugly: A separate tags model for each model
2. Bad: One polymorphic model for all 3 models
3. Good: One polymorphic model with a join table

With polymorphic associations, a model (taggings) can belong to more than one other model (profiles, posts, discussions), on a single association.

## The Good, The Bad, and The Ugly

1. Ugly: A separate tags model for each model

	* This approach is essentially duplicating the same model for each other model that it belongs to. The main difference is the foreign key id. Furthermore, there is no join table to hold all the tag words and phrases.
	* ![A separate tags model for each model]({{ site.url }}/assets/images/polymorphic_association_ugly.png)

2. Bad: One polymorphic model for all 3 models

	* This approach is better than the above as it leverages the polymorphic association to avoid duplication of a models with similar structure. 
	* You could use the following tagging model as a polymorphic association and apply it to each of the models above. But, notice how you'll be duplicating the phrases in the taggings table. 
	* ![One polymorphic model for all 3 models]({{ site.url }}/assets/images/polymorphic_association_bad.png)

3. Good: One polymorphic model with a join table

	* This is the approach we used for our project as it not only utilizes polymorphic association but also has a separate tags model for the words and phrases.
	* ![One polymorphic model with a join table]({{ site.url }}/assets/images/polymorphic_association_good.png)

## The Code

### Tagging Model

```ruby
class Tagging < ActiveRecord::Base

	belongs_to :taggable, :polymorphic => true
	belongs_to :tag

end
```

### Tag Model

```ruby
class Tag < ActiveRecord::Base

	has_many :taggings
	has_many :posts, through: :taggings
	has_many :profiles, through: :taggings
  
	validates_presence_of :phrase

end
```

### Post Model

```ruby
class Profile < ActiveRecord::Base

	belongs_to :user
	
	has_many :taggings, as: :taggable
	has_many :tags, through: :taggings, dependent: :destroy

	def tag_phrases
   		self.tags.map(&:phrase).join(", ")
  	end

  	def tag_phrases=(inputted_phrases)
   		tag_models = inputted_phrases.split(", ").map { |phrase| Tag.find_or_create_by(phrase: phrase) }
   		self.tags = tag_models
  	end

end
```

### Profile Model

```ruby
class Profile < ActiveRecord::Base

	belongs_to :user
	
	has_many :taggings, as: :taggable
	has_many :tags, through: :taggings, dependent: :destroy

	def tag_phrases
   		self.tags.map(&:phrase).join(", ")
  	end

  	def tag_phrases=(inputted_phrases)
    	tag_models = inputted_phrases.split(", ").map { |phrase| Tag.find_or_create_by(phrase: phrase) }
   		self.tags = tag_models
  	end

end
```

### Post Model

```ruby
class Post < ActiveRecord::Base

	belongs_to :user

	has_many :taggings, as: :taggable
	has_many :tags, through: :taggings, dependent: :destroy
	
  	def tag_phrases
   		self.tags.map(&:phrase).join(", ")
  	end

  	def tag_phrases=(inputted_phrases)
   		tag_models = inputted_phrases.split(", ").map { |phrase| Tag.find_or_create_by(phrase: phrase) }
   		self.tags = tag_models
  	end

end
```

























wefwef



