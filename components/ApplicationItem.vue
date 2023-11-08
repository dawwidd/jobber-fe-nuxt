<template>
  <div class="application-item">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <h3 class="mb-0">{{ application.companyName }}</h3>
      <span class="status ms-2">{{ application.status }}</span>
      <span class="badge" :class="statusClass">{{ application.status }}</span>
      <span class="ms-auto text-secondary">SALARY: {{ formatSalary(application.salary) }}</span>
    </div>
    <div class="details row">
      <div class="company-type col-12 col-md-2 mb-2 mb-md-0">
        <span class="text-muted">Type:</span> {{ application.companyType }}
      </div>
      <div class="dates col-12 col-md-4 mb-2 mb-md-0">
        <div><span class="text-muted">First contact date:</span> {{ application.applicationDate ? formatDate(application.applicationDate) : '-' }}</div>
        <div><span class="text-muted">Latest contact date:</span> {{ application.applicationDate ? formatDate(application.latestContactDate) : '-' }}</div>
      </div>
      <div class="skills col-12 col-md-4">
        <span class="text-muted d-block mb-1 me-2">Skills:</span>
        <span v-for="skill in application.skills" :key="skill._id" :style="{ backgroundColor: skill.color }" class="badge me-1">
          {{ skill.name }}
        </span>
      </div>
      <div class="actions col-12 col-md-2">
        <button class="btn btn-primary me-1">Edit</button>
        <button class="btn btn-danger">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    application: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    formatSalary(salary) {
      if (typeof salary === 'number') {
        return `${salary} PLN`;
      } else {
        return `${salary.min} - ${salary.max} PLN`;
      }
    },
  },
};
</script>

<style scoped>
.application-item {
  box-shadow: 0px 5px 15px 0px #666;
  border-radius: 10px;
  background-color: #fff;
  padding: 16px;
  margin-bottom: 16px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status {
  padding: 4px 8px;
  background-color: #eee;
  border-radius: 8px;

}

.salary {
  padding: 4px 8px;
  border-radius: 4px;
}

.details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.company-type {
  font-weight: bold;
}

.dates {
  display: flex;
  flex-direction: column;
}

.skills {
  display: flex;
}

.badge {
  font-size: 1rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.btn-primary {
  background-color: #aaa;
  border: none;
}

.btn-primary:hover {
  background-color: #666;
}

.flex-spacer {
  flex-grow: 1;
}
</style>
